import { useContext, useState } from "react";
import './CheckOut.css'
// import { productos } from "../../../products";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"

const Checkout = () => {
  const { cart, getTotalPrice, resetCart } = useContext(CartContext);
    const [ userData, setUserData ] = useState({
        nombre:"",
        userEmail:"",
        telefono:"",
        })

    const [ orderId, setOrderId ] = useState( null )

    const capturarDatos = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const funcionDelFormulario = (e) =>{
      e.preventDefault();
        let total = getTotalPrice()
        let order = {
        buyer: userData, 
        items: cart,
        total,
      }
      let ordersCollection = collection( db , "orders")
      addDoc(ordersCollection, order).then((res) => {
        setOrderId(res.id)
        resetCart()
      })

      let productsCollection = collection( db, "products" )
      
      order.items.forEach( elemento => {
        let refDoc = doc( productsCollection, elemento.id )
        updateDoc( refDoc, {stock: elemento.stock - elemento.quantity } )
      })

    }

    

    return (
      <div>
        <h2 className="cargando">Aca el Formulario de Compra</h2>
        {orderId ? ( 
          <h2 className="cargando">Te Agradecemos Por la compra. Tu ticket es : {orderId}</h2>
        ) : ( 
        
        <form className="contenedor-form" onSubmit={funcionDelFormulario}>
          <input
            className="contenido-form"
            type="text"
            placeholder="nombre"
            name="nombre"
            onChange={capturarDatos}
          />
          <input
            className="contenido-form"
            type="text"
            placeholder="email"
            name="userEmail"
            onChange={capturarDatos}
          />
          <input
            className="contenido-form"
            type="text"
            placeholder="telefono"
            name="telefono"
            onChange={capturarDatos}
          />
          <button className="enviar" type="submit">
            Enviar
          </button>
          <button className="enviar" type="button">
            Canselar
          </button>
        </form>
        )}
      </div>
    );
}

export default Checkout