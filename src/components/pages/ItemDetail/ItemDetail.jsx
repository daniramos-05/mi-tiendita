import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productos } from "../../../products"
import "./ItemDetail.css"
import ItemCount from "../../common/ItemCount/ItemCount"
import { db } from "../../../firebaseConfig"
import { collection, doc, geetDoc, getDoc } from "firebase/firestore"


const ItemDetail = () => {
  const { id } = useParams()
  const [ producto, setProducto ] = useState({})
  useEffect(() => {
    let productsCollection = collection( db , "products" )
    let refDoc = doc( productsCollection, id )
    const getDocById = getDoc( refDoc )
    getDocById.then((res) => setProducto({...res.data(), id: res.id}))

  }, [id])

  return (
    <div className="contenedor-producto-mas-detalles">
      <h2 className="nombre-mas-detalles">{producto.nombre}</h2>
      <img className="img-mas-detalles" src={producto.img} alt="" />
      <ItemCount producto={producto}/>
    </div>
  );
}

export default ItemDetail
