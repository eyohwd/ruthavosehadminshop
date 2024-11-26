import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import "./slider.css";
import shoe1 from "../../assets/img1.jpg";
import {slideData} from "../../dummyData";
import { useState } from "react";


const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
       if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
       } else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0 )
       }
    }

  return (
    <div className="container">
      
        <div className="arrow arrowLeft" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined className="arrowLeft"/>
        </div>
        <div className="wrapperSlider" >
            {slideData.map(item =>(
                <div className="slide" key= {item.id} slideIndex={slideIndex} style={{transform: `translateX(${slideIndex * -100}vw)`}}>
                <div className="imgContainer">
                    <img src= {item.img}></img>
                </div>
                <div className="infoContainer">
                   <h1 className="title">{item.title}</h1>
                   <p className="desc">{item.desc}</p>
                   <button>Shop Now</button>
                </div>
            </div>
            ))}
            
        </div>  
        <div className="arrow arrowRight" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined className= "arrowRight"/>
        </div>
         
    </div>
  );
}

export default Slider;
