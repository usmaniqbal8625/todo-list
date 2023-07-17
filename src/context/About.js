import React,{useContext} from "react";
import NoteContext from "./noteContext";

const About =()=>{
    const a = useContext(NoteContext)
return(

    <div>
        this is About  {a.name} he is in class {a.class}   </div>
)


}
export default About