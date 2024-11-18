import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productos } from "../../../products"
import "./ItemDetail.css"


const ItemDetail = () => {
  const { id } = useParams()
  const [ producto, setProducto ] = useState({})
  useEffect(() => {
    let productSelected =  productos.find((el) => el.id === +id )
    setProducto(productSelected)
  }, [id])

  return (
    <div className="contenedor-producto-mas-detalles">
      <h2 className="nombre-mas-detalles">{producto.nombre}</h2>
      <img className="img-mas-detalles" src={producto.img} alt="" />
      <p className="description-mas-detalles">{producto.description}</p>
      
    </div>
  );
}

export default ItemDetail
