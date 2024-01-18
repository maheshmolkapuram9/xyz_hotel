import Photoslides from "../components/Home/Photoslides";
import Homephotoslidelist from "../components/Home/Homephotoslidelist";
import Hotelinfo from "../components/Home/Hotelinfo";
import Homeinfo from "../components/Home/Homeinfo";
import Homelinks from "../components/Home/Homelinks";
import Gallery from "./Gallery";

const Home = () => {
    return (
        <>
            <Photoslides listofimages = {Homephotoslidelist} />
            <Hotelinfo />
            <Homeinfo />
            <Homelinks />
            <Gallery />
        </>
    )
    
};

export default Home;