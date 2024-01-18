import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
            <>
                <li className="navLink" onClick={props.handleclickOnMenu}><NavLink className="navFont" exact="true" activeclassname="active" to="/">Home</NavLink></li>
                <li className="navLink" onClick={props.handleclickOnMenu}><NavLink className="navFont" activeclassname="active" to="/location">Location</NavLink></li>
                <li className="navLink" onClick={props.handleclickOnMenu}><NavLink className="navFont" activeclassname="active" to="/rooms">Rooms</NavLink></li>
                <li className="navLink" onClick={props.handleclickOnMenu}><NavLink className="navFont" activeclassname="active" to="/inTheHotel">In The Hotel</NavLink></li>
                <li className="navLink" onClick={props.handleclickOnMenu}><NavLink className="navFont" activeclassname="active" to="/thingsToDo">Things To Do</NavLink></li>
                <li className="navLink" onClick={props.handleclickOnMenu}><NavLink className="navFont" activeclassname="active" to="/gallery">Gallery</NavLink></li>
            </>
    )
};

export default Navigation;