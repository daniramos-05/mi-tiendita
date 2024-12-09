import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {
  const { cart } = useContext(CartContext)
  return (
    <div> 
      <h2>Carrito </h2>
      {
        cart.map((elemento) => {
          return (
          <div key={elemento.id}>
            <h3>{elemento.titulo}</h3>
            <h3>cantidad: {elemento.quantity}</h3>
            <h3>precio: {elemento.precio}</h3>
          </div>
          )
        })
      }
      <Link to="/checkout">Finalizar Compra</Link>
    </div>

  )
}

export default Cart
