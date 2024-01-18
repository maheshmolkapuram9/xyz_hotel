const Leftpic = (props) => {
    return(
        <div className={props.classname}>
        
            <img className="pic leftpicChild" src={props.pic} alt={props.title}/>
            
            <div className="description leftpicChild">
                <h2 className="descriptionTitle">{props.title}</h2>
                <p className="descriptionContent">{props.content1}</p>
                 <p className="descriptionContent">{props.content2}</p>
            </div>
        </div>
    )
};

export default Leftpic;