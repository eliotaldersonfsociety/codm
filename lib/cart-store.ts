import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: string
  name: string
  game: string
  duration: string
  price: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  toggleCart: () => void
  closeCart: () => void
  openCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)
          if (existingItem) {
            return state
          }
          return { items: [...state.items, item] }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ items: [] }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      closeCart: () => set({ isOpen: false }),
      openCart: () => set({ isOpen: true }),
    }),
    {
      name: "cart-storage",
    },
  ),
)
