import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { productos } from "../../../products";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [producto, setProducto] = useState([]);
  const { nombre } = useParams();
  useEffect(() => {
    let productosFiltrados = productos.filter((el) => el.categoria === nombre)

    let task = new Promise((res) => {
      res(nombre ? productosFiltrados : productos);
    });
    task
      .then((res) => setProducto(res))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finally");
      });
  }, [nombre]);
  return <ItemList productos={producto} />;
};

export default ItemListContainer;
