import React, { useContext } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {
  const { cart, resetCart, removeProduct, getTotalPrice } = useContext(CartContext)
  let totalAmount = getTotalPrice()
  return (
    <div className='contenedor-carrito'> 
      <h2>Carrito </h2>
      {cart.length > 0 ? (
        cart.map((elemento) => {
          return (
            <div className="contenedor-productos-carrito" key={elemento.id}>
              <h3>{elemento.nombre}</h3>
              <h3>Cantidad: {elemento.quantity}</h3>
              <h3>Precio: {elemento.precio}</h3>
              <button className="eliminar" onClick={()=>removeProduct(elemento.id)}>
                Eliminar
              </button>
            </div>
          );
        })
    ) : (
      <h2>El Carrito Esta Vacio</h2>)}
      {cart.length > 0 && (
      <div>
        <h4>El Total del precio es: ${totalAmount}</h4>
        <button className='limpiar' onClick={resetCart}>Limpiar Todo El Carrito</button>
        <Link to="/checkout"><button className='finalizar'>Finalizar Compra</button></Link>
      </div>
      )}
    </div>
  )
}

export default Cart
