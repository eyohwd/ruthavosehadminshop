import "./products.css";
import { products } from "../../dummyData";
import Product from "../product/Product";

const Products = () => {
  return (
    <div className="containerP">
    { products.map(
        (item)=>(<Product item= {item} key={item.id}/>)
        ) }
    </div>
  );
}

export default Products;
