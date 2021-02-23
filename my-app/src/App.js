import React from "react"
import  Product  from "./Product";
import  products  from "./productsData";
import './App.css';

function App() {
  const mycomp = products.map((item)=>{
    return <Product key={item.id} name={item.name} price={item.price} description={item.description} />
  });
  return (
   <div>
     {mycomp}
   </div>
  );
}

export default App;
