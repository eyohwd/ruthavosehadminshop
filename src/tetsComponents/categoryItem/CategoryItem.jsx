import "./categoryItem.css";

const CategoryItem = ({item}) => {
  return (
    <div className="containerWrap">
        
      <img className="image" src={item.img}/>
      <div className="infoContainers">
      <p className="titleCat">{item.title}</p>
      <button className="buttonCat">Shop Now</button>
      </div>
    </div>
  );
}

export default CategoryItem;
