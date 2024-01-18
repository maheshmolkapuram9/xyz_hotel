import { useState } from "react"
import Images from "./Images";

const PhotoSlider = ({currentIndex}) =>{
    const[imageIndex,setImageIndex] = useState(currentIndex);

    const prevImg = ()=>{
        setImageIndex((prevIndex)=>{
            if (prevIndex === 0){
                return Images.length - 1;
            }
            return prevIndex - 1;
        })
    }

    const nextImg = ()=>{
        setImageIndex((nextIndex)=>{
            if (nextIndex === Images.length-1){
                return 0;
            }
            return nextIndex + 1;
        })
    }

    return(
        
        <div className="imgContainer">
            <img className="slideImg" src={Images[imageIndex]} alt={`slide${imageIndex}`} />
            <svg className="arrow leftArrow" onClick={prevImg} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#10ac17" viewBox="0 0 256 256"><path d="M216,88v80a8,8,0,0,1-8,8H120v48L24,128l96-96V80h88A8,8,0,0,1,216,88Z" opacity="0.2"></path><path d="M208,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h80a16,16,0,0,0,16-16V88A16,16,0,0,0,208,72Zm0,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h88Z"></path></svg>
            <svg className="arrow rightArrow" onClick={nextImg} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#10ac17" viewBox="0 0 256 256"><path d="M136,224V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88V32l96,96Z" opacity="0.2"></path><path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H48A16,16,0,0,0,32,88v80a16,16,0,0,0,16,16h80v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H48V88h88a8,8,0,0,0,8-8V51.31L220.69,128Z"></path></svg>
        </div>
       
    )
}

export default PhotoSlider;