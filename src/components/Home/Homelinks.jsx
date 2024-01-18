import Homelink from "./Homelink";
import ListofHomeLinks from "./ListofHomeLinks";

const Homelinks = () => {
    const HomeRoutes = ListofHomeLinks.map((info,index)=>{
        return (
            <>
               <Homelink 
                key = {index}
                route = {info.route}
                img = {info.img}
                title = {info.title}
               /> 
            </>
        )
    });
    return (
        <div className="homelinks">
            {HomeRoutes}
        </div>
    )
};

export default Homelinks;