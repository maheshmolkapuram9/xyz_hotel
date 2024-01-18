const SvgContent = (props) => {
    return(
        <>
            <div className="svgContent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#E32B17" viewBox="0 0 256 256">
                <path d="M237.66,133.66l-96,96A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96A8,8,0,0,1,237.66,133.66Z"></path>
                </svg>
                <p style={{paddingLeft:"0.5rem"}}>{props.content}</p>
            </div>
        </>
        
    )
};

export default SvgContent;