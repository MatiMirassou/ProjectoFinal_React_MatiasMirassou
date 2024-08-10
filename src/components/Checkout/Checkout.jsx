import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const Checkout = () => {
    const { cart, totalQuantity } = useContext(CartContext);
    return (
        <>
            <div>
                {cart.map((item) => (
                    <article key={item.id}>
                        <header>
                            <h2 className="text-secondary text-center bg-info m-5">
                                {item.name}{" "}
                                <span className="badge">Cantidad: {totalQuantity}</span>
                            </h2>
                        </header>
                    </article>
                ))}
            </div>
            <h1 className="text-center">Checkout</h1>
            {/* formulario */}
            <div className="d-flex justify-content-center p-3 ">
                <button className="btn btn-info">
                    Generar Orden
                </button>
            </div>
        </>
    );
}

export default Checkout