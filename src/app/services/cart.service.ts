import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  // Signal computed pour le nombre total d'articles
  totalItems = computed(() => 
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  // Signal computed pour le total du panier
  totalPrice = computed(() =>
    this.cartItems().reduce((total, item) => total + (item.product.price * item.quantity), 0)
  );

  // Getter pour les articles du panier (signal readonly)
  get items() {
    return this.cartItems.asReadonly();
  }

  // Ajouter un produit au panier
  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find(item => item.product.id === product.id);

    if (existingItem) {
      // Si le produit existe déjà, augmenter la quantité
      this.cartItems.update(items =>
        items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Sinon, ajouter un nouvel article
      this.cartItems.update(items => [...items, { product, quantity }]);
    }
  }

  // Retirer un produit du panier
  removeFromCart(productId: number): void {
    this.cartItems.update(items => items.filter(item => item.product.id !== productId));
  }

  // Mettre à jour la quantité d'un produit
  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    this.cartItems.update(items =>
      items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }

  // Vider le panier
  clearCart(): void {
    this.cartItems.set([]);
  }

  // Vérifier si un produit est dans le panier
  isInCart(productId: number): boolean {
    return this.cartItems().some(item => item.product.id === productId);
  }
}

