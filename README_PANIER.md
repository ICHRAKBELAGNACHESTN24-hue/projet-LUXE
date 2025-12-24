# Application LUXE - Système de Panier Angular

Cette application Angular intègre un système de panier complet pour la boutique premium LUXE.

## Fonctionnalités du Panier

### 1. Service CartService (`src/app/services/cart.service.ts`)
- Gestion de l'état du panier avec Angular Signals
- Ajout de produits au panier
- Suppression de produits
- Mise à jour des quantités
- Calcul automatique du total et du nombre d'articles
- Vidage du panier

### 2. Composant ProductCard (`src/app/components/product-card/`)
- Affiche les produits avec leurs informations
- Bouton "Ajouter au panier" pour chaque produit
- Badge pour les produits spéciaux (NOUVEAU, LUXE, EXCLUSIF)

### 3. Composant Cart (`src/app/components/cart/`)
- Affichage de tous les articles du panier
- Modification des quantités (+/-)
- Suppression d'articles individuels
- Calcul du total avec livraison gratuite à partir de 500 MAD
- Bouton pour vider le panier

### 4. Composant Navbar (`src/app/components/navbar/`)
- Badge avec le nombre d'articles dans le panier
- Lien vers la page panier
- Navigation entre les sections

## Structure des Fichiers

```
mon-projet-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cart/              # Composant panier
│   │   │   ├── home/              # Page d'accueil
│   │   │   ├── navbar/            # Barre de navigation
│   │   │   └── product-card/      # Carte produit
│   │   ├── models/
│   │   │   └── product.model.ts   # Modèles Product et CartItem
│   │   ├── services/
│   │   │   └── cart.service.ts    # Service de gestion du panier
│   │   ├── app.ts                 # Composant principal
│   │   └── app.routes.ts         # Routes de l'application
│   └── styles.css                # Styles globaux
```

## Utilisation

### Démarrer l'application
```bash
cd mon-projet-angular
npm install
ng serve
```

L'application sera accessible sur `http://localhost:4200`

### Routes disponibles
- `/` - Page d'accueil avec les produits
- `/cart` - Page du panier

### Ajouter un produit au panier
1. Sur la page d'accueil, cliquez sur "Ajouter au panier" sur n'importe quel produit
2. Le badge sur l'icône du panier dans la navbar affichera le nombre d'articles

### Gérer le panier
1. Cliquez sur l'icône du panier dans la navbar pour accéder à la page panier
2. Utilisez les boutons +/- pour modifier les quantités
3. Cliquez sur l'icône poubelle pour supprimer un article
4. Le total se met à jour automatiquement

## Modèles de Données

### Product
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  badge?: string;
  rating: number;
}
```

### CartItem
```typescript
interface CartItem {
  product: Product;
  quantity: number;
}
```

## Fonctionnalités Techniques

- **Angular Signals** : Utilisation des signals pour la réactivité
- **Standalone Components** : Tous les composants sont standalone
- **Service Injection** : CartService injecté dans les composants nécessaires
- **Computed Signals** : Calcul automatique du total et du nombre d'articles

## Personnalisation

Pour ajouter de nouveaux produits, modifiez le tableau `products` dans `home.component.ts` :

```typescript
products: Product[] = [
  {
    id: 1,
    name: 'Nom du produit',
    price: 999,
    image: 'chemin/vers/image.jpg',
    badge: 'NOUVEAU',
    rating: 5
  },
  // ... autres produits
];
```

## Notes

- Les images doivent être placées dans le dossier `src/assets/` ou dans le dossier public
- Le panier est stocké en mémoire (se réinitialise au rechargement de la page)
- Pour persister le panier, vous pouvez utiliser localStorage dans le CartService

