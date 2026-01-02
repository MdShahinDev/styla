import { Product } from "./product";

export type CartItem = Product & {
  quantity: number;
  id: string;
};
export type CartStore ={
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
    decreaseQuantity: (productId: string) => void;
}