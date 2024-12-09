import { useContext } from 'react'
import './CartWidget.css'
import { Link } from "react-router-dom"
import { CartContext } from '../../../context/CartContext'

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  return (
    <Link className='Link' to="/cart">
      🛒 
      <span>{cart.lenght}</span>
    </Link>
  )
}

export default CartWidget
