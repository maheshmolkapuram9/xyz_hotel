import { useState } from "react";
import Images from "../components/Images";
import PhotoSlider from "../components/PhotoSlider";

const Gallery = () => {
    const [isPhotoSlide,setIsPhotoSlide] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handlePhtoSlide = (index)=>{
        setIsPhotoSlide(!isPhotoSlide);
        setSelectedImageIndex(index)
    }

    return(
        <>  
            <div className="galleryTitle"><h1 className="galleryHeading title">Gallery</h1></div>
            <div className="gallery">
                {Images.map((imageno,index)=>{
                    return (
                        <>
                            {/* <a className="galleryImgLink" href={imageno} target="-blank"><img className="galleryImg" src={imageno} key={index} alt="{index}"/></a> */}
                            <div className="galleryImgLink" onClick={()=>handlePhtoSlide(index)} >
                                <img className="galleryImg" src={imageno} key={index} alt="{index}"/>
                            </div>
                            {isPhotoSlide && <div className="navigationOverlay slide" >
                                <div onClick={handlePhtoSlide} className="menuIconCancel">
                                    <p className="menuIconCancelText">Close 
                                        <svg style={{display:"inline",verticalAlign:"middle", paddingLeft:"3px"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#130CE1" viewBox="0 0 256 256"><path d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                                    </p>
                                </div>
                                
                                <PhotoSlider currentIndex={selectedImageIndex}/>
                                
                            </div>}
                        </>
                    )
                })}
            </div>
        </>
    )
};

export default Gallery;