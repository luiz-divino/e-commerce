import { createContext, useState } from "react";
import {
  CartContextData,
  CartContextProviderProps,
  IProduct,
} from "../../interfaces/contract";

 const CartContext = createContext({} as CartContextData);

 const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
 export { CartContextProvider, CartContext };