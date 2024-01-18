const Room = (props) => {
    return(
        <div className="leftpic room">
            
            <img className="pic roomImg" src={props.img} alt="Basic Double Room- Shared Bathroom - Room Only"/>
           
            <div className="description roomContent">
                <h3 className="roomDescription">{props.title}</h3>
                <p className="roomDescription"> <svg style={{verticalAlign:"middle"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3ca1bb" viewBox="0 0 256 256"><path d="M144,204a16,16,0,1,1-16-16A16,16,0,0,1,144,204ZM239.61,83.91a176,176,0,0,0-223.22,0,12,12,0,1,0,15.23,18.55,152,152,0,0,1,192.76,0,12,12,0,1,0,15.23-18.55Zm-32.16,35.73a128,128,0,0,0-158.9,0,12,12,0,0,0,14.9,18.81,104,104,0,0,1,129.1,0,12,12,0,0,0,14.9-18.81ZM175.07,155.3a80.05,80.05,0,0,0-94.14,0,12,12,0,0,0,14.14,19.4,56,56,0,0,1,65.86,0,12,12,0,1,0,14.14-19.4Z"></path></svg>
                  <span> Free Wi-Fi</span></p>
                <p style={props.style} className="roomDescription"> <svg style={{verticalAlign:"middle"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3ca1bb" viewBox="0 0 256 256"><path d="M128,68a12,12,0,0,1-12,12H100a12,12,0,0,1,0-24h16A12,12,0,0,1,128,68Zm48.15,127.62,3.65,25.55A20,20,0,0,1,160,244H96a20,20,0,0,1-19.8-22.83l3.65-25.55A100.08,100.08,0,0,1,28,108,12,12,0,0,1,40,96H52V40A20,20,0,0,1,72,20H184a20,20,0,0,1,20,20V96h12a12,12,0,0,1,12,12A100.08,100.08,0,0,1,176.15,195.62ZM76,96H180V44H76Zm77.21,108.78a100.3,100.3,0,0,1-50.42,0L100.61,220h54.78ZM203.05,120H53a76,76,0,0,0,150.1,0Z"></path></svg>
                 <span> Shared Toilet</span></p>
                <p className="roomDescription">{props.description}</p>
                <h4 className="roomDescription">Facilities:</h4>
                <ul className="roomFacilities">
                    {props.facility}
                </ul>
            </div>
        </div>
    )
};

export default Room;