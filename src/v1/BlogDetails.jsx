import { useParams, useNavigate, Navigate } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => { 

    const {id} = useParams();
    const {data : blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
    

    const deleteBlog = () => { 
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        })
       .then(() => navigate('/'));
     

            
      


    
        }
    return (
        <div>
            <h1 className="text-3xl ">Blog Details - {id}</h1>
            { isLoading && <div> Loading ...</div>}
             { error && <div> {error} </div>}
             {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p> written by - {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button className="border border-gray-800 px-7 py-2 mt-10 rounded-xl bg-red-400 text-white hover:bg-red-700 hover:scale-110"
                    onClick={deleteBlog}>
                        Delete Button
                    </button>

                </article>
             )}

        </div>
    )

}

export default BlogDetails;