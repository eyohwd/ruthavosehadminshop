import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import "./product.css"

const Product = ({item}) => {
  return (
    <div className="containerf">
      <img className="imageProduct" src={item.img}/>
      <div className="iconContainer">
        <div className="icon">
             <FavoriteBorder/>
        </div>

        <div className="icon">
             <SearchOutlined/>
        </div>

        <div className="icon">
             <ShoppingCartOutlined/>
        </div>
      </div>
    </div>
  );
}

export default Product;
