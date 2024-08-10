import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const {category} = useParams()

    useEffect(() => {
        if(!category){
            getProducts()
            .then(res => setProducts(res))
            .catch(err => console.log(err))
        }else {
            getProductsByCategory(category)
            .then(res => setProducts(res))
            .catch(err => console.log(err))
        }     
    }, [category])

    return (
        <div className="main" style={{ backgroundColor: "#c6c6c6", textAlign: "center", }}>
            <h1 style={{ color: "white", padding: "20px", }}>{greetings}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer

