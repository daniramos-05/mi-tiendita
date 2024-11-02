import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './ItemCount.css'

const ItemCount = () => {

   const [count, setCount] = useState(1);
   const [productos, setProductos] = useState(1);
   const [ordenados, setOrdenados] = useState(true);

   // useEffect(() => {
   //    if(count === 5){
   //      console.log("llamo a mi base de datos para buscar ofertas")} 
   // }, [count])

   useEffect(() => {
     if (ordenados) {
       console.log("estan ordenados");
     } else {
       console.log("estan desordenados");
     }
   }, []);

   console.log("el componente se renderiza");

   const sumar = () => {
    if (count < 10) 
    setCount(count + 1)
   }
   const restar = () => {
     if (count > 1)
     setCount(count - 1)
   }

   
  return (
    <>
      <div className="contenedor-itemcount">
        <Button text="-" fn={restar} color="negro" />
        <span>{count}</span>
        <Button text="+" fn={sumar} color="negro" />
      </div>
    </>
  );
}

export default ItemCount
