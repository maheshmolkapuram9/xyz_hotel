import { useState } from "react";
import Navigation from "./Navigation";

const HotelHeader = () => {
    const [clickOnMenu,setclickOnMenu] = useState(false);

    function handleclickOnMenu() {
        setclickOnMenu(!clickOnMenu);
    }
    return (
        <div className="hotelHeader">
            <h3 className="hotelTitle hotelHeaderSection">XYZ Hotel - <span className="hotelLocation">London</span> </h3>
            <div onClick={handleclickOnMenu} className="hotelHeaderSection menuIcon">
                <h3 style={{paddingRight:"0.5rem"}}>MENU </h3>
                <svg style={{display:"block"}} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#130CE1" viewBox="0 0 256 256"><path d="M224,120v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H216A8,8,0,0,1,224,120Zm-8,56H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-128H40a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z"></path></svg>
            </div>
            {clickOnMenu && <div className="navigationOverlay" >
                <div onClick={handleclickOnMenu} className="menuIconCancel">
                    <p className="menuIconCancelText">Close 
                    <svg style={{display:"inline",verticalAlign:"middle", paddingLeft:"3px"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#130CE1" viewBox="0 0 256 256"><path d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                    </p>
                </div>
                <ul className="menuNavigation"><Navigation handleclickOnMenu={handleclickOnMenu}/></ul>
            </div>}
        </div>
    )
};

export default HotelHeader;