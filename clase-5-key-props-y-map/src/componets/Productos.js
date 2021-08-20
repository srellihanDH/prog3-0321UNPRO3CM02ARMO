import React from "react";
import "./Productos.css";

const Productos = (props) => {
  const { productos } = props;
  //console.log(productos);
  return (
    <div>
      {productos.map((producto, idx) => {
        return (
          <div key={idx}>
            <h2>{producto.name}</h2>
            <p>{producto.price}</p>
            {producto.colors.map((color, idx) => {
              return (
                <span
                  style={{ background: color }}
                  className="color"
                  key={idx}
                ></span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Productos;
