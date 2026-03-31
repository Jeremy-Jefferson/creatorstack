import { createContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

// Helper to get initial cart from localStorage
const getInitialCart = () => {
  try {
    const storedCart = localStorage.getItem('creatorstack_cart');
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  } catch {
    localStorage.removeItem('creatorstack_cart');
  }
  return [];
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(getInitialCart);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('creatorstack_cart', JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productId === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { productId: product.id, quantity, product }];
    });
  }, []);

  const removeItem = useCallback((productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0
  );

  const value = {
    items,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext };
