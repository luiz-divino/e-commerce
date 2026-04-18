
export interface IProduct {
  id: number;
  title: string;
  description: string
  category: string
  price: number
  images: string
}

export interface CartContextData {
  cartItems: IProduct[];
  setCartItems: (items: IProduct[]) => void;
}

export interface CartContextProviderProps {
  children: React.ReactNode;
}


