import React from "react";
import ItemCount from "../../pages/ItemCount/ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <>
      <div className="contenedor-items">
        <h2 className="nombre">{producto.nombre}</h2>
        <img className="img" src={producto.img} alt="" />
        <p className="description">{producto.description}</p>
        <div className="precio">{producto.precio}</div>
        <Link className="mas-detalles" to={`/itemDetail/${producto.id}`}>
          Ver Detalles
        </Link>
        <ItemCount />
      </div>
    </>
  );
};

export default Item;
