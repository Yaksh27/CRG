const BlogList = (props) => {
    const blogs = props.exportBlogs;

    return(

        <div>
            
            {blogs.map((blog) => (
            <div key={blog.id}>
             <h2 className="text-xl mt-10 font-medium"> {blog.title} </h2>
             <p> by - {blog.author}</p>
            </div>
    
    ))}
        
        </div>
    )
}
export default BlogList;