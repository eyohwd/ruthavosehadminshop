import "./homez.css"
import { CancelOutlined, ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';

import p1 from "../../assets/pix9.jpg"
import p2 from "../../assets/pix10.jpg"
import p3 from "../../assets/pix11.jpg"
import p4 from "../../assets/pix8.jpg"
import p5 from "../../assets/pix18.jpg"
import p6 from "../../assets/pix14.jpg"
import p7 from "../../assets/pix15.jpg"
import p8 from "../../assets/pix16.jpg"
import { useState } from "react"

const Homez = () => {

  const photos = [
    {src: p1 },
    {src: p2 },
    {src: p3 },
    {src: p4 },
    {src: p5 },
    {src: p6 },
    {src: p7 },
    {src: p8 },
    
  ]

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false);
  const handleOpen = (i)=>{
    setSlideNumber(i)
     setOpen(true);
  }

  const handleSlide = (direction) => {
    let newSlideNumber;
    if(direction === "left"){
      newSlideNumber = slideNumber === 0 ? 7 :slideNumber - 1 
    } else{
      newSlideNumber = slideNumber === 7 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber);
  }
  return (
    <div className='imagesContainer'>
 
     {open && <div className="sliderContainer">
      
       <div className="icon close"> 
        <CancelOutlined style={{fontSize:"40px"}}  onClick={()=>setOpen(false)}/> 
        </div>
    <div className="icon">
      <ArrowLeftOutlined style={{fontSize:"70px"}} onClick={()=>handleSlide("left")}/>
    </div>
    <div className="sliderWrapper">
       <img className="sliderImg" src={photos[slideNumber].src}/>
       </div>
        <div className="icon">
      <ArrowRightOutlined style={{fontSize:"70px"}} onClick={()=>handleSlide("right")}/>
    </div>
      
      </div>}
<div className="imagesWrapper">
      <h1 className="title">Fantastic and affordable Sales</h1>
      <div className='imgContainer'>
      
        {  photos.map((photo, i) => (
          <div className='imgWrapper'>
          <img className='img' src={photo.src} onClick={()=>handleOpen(i)} alt=''/>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Homez;
