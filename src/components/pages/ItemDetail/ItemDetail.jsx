import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productos } from "../../../products"
import "./ItemDetail.css"
import ItemCount from "../../common/ItemCount/ItemCount"


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
      <ItemCount producto={producto}/>
    </div>
  );
}

export default ItemDetail
