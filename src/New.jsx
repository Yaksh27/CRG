import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function New() {
    
    const {data , isLoading, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div>
            {error && <div> {error} </div>}
              { isLoading && <div> Loading.... </div>}
            { data && <BlogList blogs={data} title="All Blogs"  />}
           
        </div>
    );
}

export default New;
