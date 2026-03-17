import { create } from 'zustand';

export interface CartItem {
  product_id: string;
  quantity: number;
  name: string;
  price: number;
  image_url: string;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
  setCart: (items: CartItem[], totalPrice: number) => void;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  totalPrice: 0,
  totalCount: 0,
  setCart: (items, totalPrice) => set({ 
      items, 
      totalPrice, 
      totalCount: items.reduce((sum, item) => sum + item.quantity, 0)
  }),
  addItem: (item) => set((state) => {
    const existing = state.items.find(i => i.product_id === item.product_id);
    let newItems;
    if (existing) {
      newItems = state.items.map(i => 
        i.product_id === item.product_id ? { ...i, quantity: i.quantity + item.quantity } : i
      );
    } else {
      newItems = [...state.items, item];
    }
    return {
      items: newItems,
      totalCount: newItems.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: newItems.reduce((sum, i) => sum + (i.price * i.quantity), 0)
    };
  }),
  removeItem: (productId) => set((state) => {
    const newItems = state.items.filter(i => i.product_id !== productId);
    return {
      items: newItems,
      totalCount: newItems.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: newItems.reduce((sum, i) => sum + (i.price * i.quantity), 0)
    };
  }),
  updateQuantity: (productId, quantity) => set((state) => {
    const newItems = state.items.map(i => 
      i.product_id === productId ? { ...i, quantity: Math.max(1, quantity) } : i
    );
    return {
      items: newItems,
      totalCount: newItems.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: newItems.reduce((sum, i) => sum + (i.price * i.quantity), 0)
    };
  }),
  clearCart: () => set({ items: [], totalPrice: 0, totalCount: 0 })
}));
