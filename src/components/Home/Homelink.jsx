const Homelink = (props) =>{
    return(
        <div className="homelink">
            <a href={props.route} className="galleryImgLink homeImgLink">
                <img className="galleryImg homeGalleryImg" src={props.img} alt={props.title}/>
            </a>
            <h4>{props.title}</h4>
            <a className="linktoroutes" href={props.route}>More Information</a>
        </div>
    )
};

export default Homelink;