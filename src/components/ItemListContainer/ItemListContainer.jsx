import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProductos } from '../asynckMock'
import Item from '../Item/Item'

const ItemListContainer = ( {saludo} ) => {

  const [ productos, setProductos ] = useState([])
  const [ cargando, setCargando ] = useState(true)
  useEffect( () => {
    getProductos()
      .then( (res) => setProductos(res) )
      .catch()
      .finally( () => setCargando(false))
  }, [])

  console.log(productos)

  if(cargando){
    return(
      <div className='contenedor-boton'>
        <h2>Cargando...</h2>
      </div>
    )
  }

  return (
    <div className='contenedor'>
      {productos.map((el)=> {
        return(
          <Item key={el.id} producto={el}/>
        )
      })}
    </div>
  );
}

export default ItemListContainer
