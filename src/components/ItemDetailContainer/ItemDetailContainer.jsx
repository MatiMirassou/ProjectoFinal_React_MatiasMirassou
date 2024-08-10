import { getProductById } from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState();
  const {id} = useParams();

  useEffect(() => {
    getProductById(id)
    .then(res => setProduct(res))
    .catch(err => console.log(err))
  }, [id])

  return (
    <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer