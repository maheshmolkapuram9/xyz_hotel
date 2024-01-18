import { Outlet } from "react-router-dom";
import HotelHeader from "../components/HotelHeader";
import Footer from "../components/footer";
import Navigation from "../components/Navigation";

const Layout = () => {
    return (
        <div className="HeaderNav">
            <div className="menubar">
                <div className="menubarRow">
                <HotelHeader/>
                <nav className="navSection"><ul className="navGroup"><Navigation /></ul></nav>
                </div>
            <Outlet /> 
            </div>
         <Footer />
        </div>
    )
};

export default Layout;