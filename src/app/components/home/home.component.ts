import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Sac Lulu Daim Taupe',
      price: 1299,
      image: 'assets/images/SACLUXE.jpeg',
      badge: 'NOUVEAU',
      rating: 5
    },
    {
      id: 2,
      name: 'Montre Cartier Or',
      price: 15999,
      image: 'assets/images/CARTIER.jpeg',
      badge: 'LUXE',
      rating: 5
    },
    {
      id: 3,
      name: 'Lunettes Gucci',
      price: 2499,
      image: 'assets/images/LUNETTE.jpeg',
      badge: 'EXCLUSIF',
      rating: 5
    }
  ];

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Hauteur de la navbar fixe
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

