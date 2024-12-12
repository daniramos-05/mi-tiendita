import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
// import { productos } from "../../../products";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners"
import ItemList from "../ItemList/ItemList";
import { db } from "../../../firebaseConfig"
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"
// import { productos } from "../../../products";


const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const { nombre } = useParams();

  useEffect(() => {
    const productsCollection = collection( db, "products" )
    let refCollection = productsCollection
    if( nombre ){
      const productsCollectionFiltered = query( 
        productsCollection, 
        where( "categoria" , "==" , nombre ) 
      )
      refCollection = productsCollectionFiltered;
    }
    const getProducts = getDocs( refCollection )
    getProducts.then((res) => {
      let products = res.docs.map( elemento => {
        return {...elemento.data(), id: elemento.id}
      })
      setProducto(products)
    })


  }, [nombre]);

//  const agregarProductos = () => {
//    let productsCollection = collection( db, "products" )
//    productos.forEach((elemento) => {
//      addDoc( productsCollection, elemento )
//    })
//  }

  return (
    <div>
      <h2 className="cargando">Aca Los Productos</h2>
      {/*     <button onClick={agregarProductos}>Agregar Productos</button>*/}
      <div>
        {producto.length === 0 ? (
          <BeatLoader color="rgb(0, 255, 0)" display="flex" align="center" />
        ) : (
          <ItemList productos={producto} />
        )}
        <h4 className="cargando">Final de la Pagina</h4>
      </div>
    </div>
  );
};

export default ItemListContainer;
