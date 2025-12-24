export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  badge?: string;
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

