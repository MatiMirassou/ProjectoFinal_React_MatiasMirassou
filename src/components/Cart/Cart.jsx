import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, totalQuantity, getTotal, clearCart } = useContext(CartContext);
    const total = getTotal();

    if (totalQuantity === 0) {
        return (
            <div>
                <p>No hay elementos en el carrito</p>
                <Link to="/" >Volver a la tienda</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            <h3>Total: ${total}</h3>
            <div className="d-flex justify-content-center ">
                <button onClick={clearCart} className="btn btn-warning">Vaciar Carrito</button>
                <Link to="/checkout" className="btn btn-info">
                    Checkout
                </Link>
            </div>
        </div>
    )
}

export default Cart