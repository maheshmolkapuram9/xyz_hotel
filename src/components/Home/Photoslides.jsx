import { useState, useEffect } from "react";

const Photoslides = (props) => {
    const [ imageNum, setImageNum ] = useState(0);
    const PhotoSlideLength = props.listofimages.length;

    useEffect(()=>{
        function HandlingImageNum(){
            if(imageNum === PhotoSlideLength-1){
                setImageNum(0);
            } else {
                setImageNum(imageNum + 1);
            };
        }

        const interval = setInterval(()=>{
            HandlingImageNum();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [imageNum, PhotoSlideLength]);

    return(
        <div className="photoslidesec">
            <img className="photoslideimg" src={props.listofimages[imageNum]} alt="Hello"/>
        </div>
    )
};

export default Photoslides;