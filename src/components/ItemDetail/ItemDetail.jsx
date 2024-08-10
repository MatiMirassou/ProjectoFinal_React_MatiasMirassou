import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({ name, rutaImagen, artist, category, price, id, stock }) => {
    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        const objectToAdd = {
            id, name, price,
            quantity: count,
        }
        addItem(objectToAdd)
        }


    return (
        <div className="card" style={{ width: "18rem", padding: "10px", margin: "20px", alignContent: "center", justifyContent: "center" }}>
            <h1>{name}</h1>
            <video className="card-img-top" src={rutaImagen}  type="video/mp4" autoPlay muted loop style={{ width: "250px", height: "auto" }} />
            <div className="card-body">
                <p className="card-title">Artist: {artist}</p>
                <p className="card-text">Collection: {category}</p>
                <p className="card-text">${price}</p>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
            <div>
                {
                    isInCart(id) ? (
                        <Link to="/cart"> 
                            <button className="btn btn-primary">Ir al carrito</button>
                        </Link>
                    ): (
                        <ItemCount stock={stock} onAdd={handleAdd}/>
                    )
                }
            </div>
        </div>
        
    )
}

export default ItemDetail