// Products.js
import  React  from "react";

function Product(props) {
    console.log(props)
    return(
        <div className="product-card">
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}
export default Product;