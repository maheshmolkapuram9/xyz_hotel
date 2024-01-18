import Room from "../components/Room";
import RoomsList from "../components/RoomsList";
import Photoslides from "../components/Home/Photoslides";
import RoomsListofSlides from "../components/Rooms/RoomsListofSlide";


const Rooms = () => {
    const EachRoom = RoomsList.map((roomProperty,index)=>{
        return <Room 
            key = {index}
            img = {roomProperty.img}
            title = {roomProperty.title}
            style = {roomProperty.style}
            description = {roomProperty.description}
            facility = {roomProperty.facilities.map((facility,ind)=>{
                return <li>{facility}</li>
            })}
        />
    })
    return (
        <>
            <Photoslides listofimages={RoomsListofSlides} />
            {EachRoom}
        </>
    )
};

export default Rooms;