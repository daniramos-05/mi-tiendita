import React from "react";
import Item from "../../common/Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="contenedor">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
