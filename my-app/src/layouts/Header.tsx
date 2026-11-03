import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
    const { totalCount } = useCart();
    return (
        <header className="header">
            <Link to='/'>SPACE SHOP</Link>
            <Link to='/'>Product List</Link>
            <Link to='/cart'>Cart({totalCount})</Link>

        </header>
    )
}
export default Header; 