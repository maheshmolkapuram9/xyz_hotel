import ThingsToDoDisc from "../components/ThingsToDoDesc";
import Leftpic from "../components/Leftpic";
import Listofthings from "../components/Listofthings";

const ThingsToDo = () => {
    const LeftpicContent = Listofthings.map((elem)=>{
        return(
            <Leftpic 
                key = {elem.key}
                classname = {elem.classname}
                title = {elem.title}
                pic = {elem.pic}
                content1 = {elem.content1}
                content2 = {elem.content2}
            />
        )
    });
    return (
        <>
            <ThingsToDoDisc />
            {LeftpicContent}
        </>
    )
};

export default ThingsToDo;