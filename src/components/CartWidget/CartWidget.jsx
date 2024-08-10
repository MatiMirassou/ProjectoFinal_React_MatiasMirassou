import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"

function CartWidget() {
    const {totalQuantity} = useContext(CartContext)
    console.log(totalQuantity)

    return (
        <Link to={"/cart"} className="CartWidget" href="#">
            <i style={ {textDecoration: "none", color: "white"}} className="fas fa-shopping-cart"></i>
            { totalQuantity }
        </Link>
    );
}

export default CartWidget