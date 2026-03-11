import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router-dom"

export const Header = () =>{
    return(
        <header className="w-full bg-blue-800 px-1">
            <nav className="w-full max-w-7xl h-14 px-5 sm:px-6 flex items-center justify-between mx-auto">
                <Link to='/' className="font-bold text-2xl text-white">
                    div shop
                </Link>

                <Link to='/cart'>
                    <FiShoppingCart size={24} color="white"/>
                </Link>
            </nav>
        </header>
    )
}