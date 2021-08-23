import React from "react";

const frutas = ["sandia", "manzana", "kiwi", "durazno", "mango", "ana"];

const App = () => {
  return (
    <div>
      <ul>
        {frutas.map((fruta, index) => {
          return <li key={index}>{fruta}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
