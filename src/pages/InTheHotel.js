import SvgContent from "../components/SvgContent";
import Facilities from "../components/Facilities";

const InTheHotel = () => {
    const FacilitiesList = Facilities.map((facilityList,index)=>{
        return (
            <>
                <div className="facilitiesSec" key={facilityList.key}>
                    <h3 className="facilitiesTitle">{facilityList.title}</h3>
                    {facilityList.facilities.map((facility,ind)=>{
                        return (
                            <SvgContent className="facility" key={facilityList.key+ind} content={facility} />
                        )
                    })} 
                </div>
            </>
            
        )
    });
    return(
        <>
            <div className="thingsToDoMain" id="inTheHotel">
                <img className="thingsToDoMainImg" src="./London/londonEye.jpg" alt="LondonBridge"/>
            </div>
            <div className="galleryTitle">
                <h1 className="galleryHeading">In The Hotel</h1>
            </div>
            <div className="facilities">{FacilitiesList}</div>
        </>
        
    )
};

export default InTheHotel;
