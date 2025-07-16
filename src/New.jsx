import { useState } from "react";
import BlogList from "./BlogList";

function New(){

   const [blogs, setBlogs] = useState([
        { id:1, title : "New Website", body : "Body1", author : "Yaksh"},
        { id:2, title : "New Website2", body : "Body2", author : "Patel"},
        { id:3, title : "New Website3", body : "Body3", author : "Clark"}
    ]);
    
 
     

    return(
        <div>
            <BlogList exportBlogs={blogs}/>
        </div>
    
    )

}


export default New;