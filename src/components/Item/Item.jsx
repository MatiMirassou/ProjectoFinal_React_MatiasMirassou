import { Link } from "react-router-dom"


const Item = ({ id, name, rutaImagen, artist, category, price }) => {
    return (
        <article className="card col-md-6" style={{ width: "18rem", padding: "10px", margin: "20px", }}>
            <div className="card-img-top" ><video src={rutaImagen} type="video/mp4" autoPlay muted loop style={{ width: "250px", height: "auto" }} /></div>
            <div className="card-body">
                <div className="card-title">{name}</div>
                <div className="card-text">Artist: {artist}</div>
                <div className="card-text">Collection: {category}</div>
                <div className="card-text">Price: ${price}</div>
                <Link to={`/item/${id}`} className="btn btn-primary">Ver Detalle</Link>
            </div>
        </article>
    )
}

export default Item