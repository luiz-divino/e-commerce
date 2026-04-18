import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <header className="w-full bg-blue-800 px-1">
      <nav className="w-full max-w-7xl h-14 px-5 sm:px-6 flex items-center justify-between mx-auto">
        <Link to="/" className="font-bold text-2xl text-white">
          div shop
        </Link>

        <Link to="/cart" className="relative">
          <FiShoppingCart size={24} color="white" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center -ml-3">
            {cartItems.length}
          </span>
        </Link>
      </nav>
    </header>
  );
};
