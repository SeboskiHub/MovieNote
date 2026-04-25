import { createContext, useContext, useState, type ReactNode } from "react";

export type CartItem = {
  id: number;
  title: string;
  poster_path: string | null;
  price: number;
};

type CartContextType = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  addToCart: (movie: any) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const PRICE_PER_MOVIE = 20000;

  const addToCart = (movie: any) => {
    // Check for duplicates
    const exists = cartItems.find((item) => item.id === movie.id);
    if (exists) {
      alert("Esta película/serie ya está en tu carrito.");
      return;
    }

    const title = movie.title || movie.name || "Sin título";
    
    const newItem: CartItem = {
      id: movie.id,
      title: title,
      poster_path: movie.poster_path || null,
      price: PRICE_PER_MOVIE,
    };

    setCartItems((prev) => [...prev, newItem]);
    alert(`"${title}" se ha agregado al carrito.`);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}
