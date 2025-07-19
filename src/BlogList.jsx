import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    return (
        <div>
            <h1 className="mt-10 text-3xl font-medium">{title}</h1>
            {blogs.map((blog) => (
            
                    <div key={blog.id} className="flex justify-start items-center gap-4 mt-10">
                        <Link to={`/blogs/${blog.id}`}>
                        <h2 className="text-xl font-medium">{blog.title}</h2>
                        <p>by - {blog.author}</p>
                        </Link>
                    
                     
                </div>
            ))}
        </div>
    );
};
export default BlogList;
