const BlogList = ({ blogs, title }) => {
    return (
        <div>
            <h1 className="mt-10 text-3xl font-medium">{title}</h1>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <div className="flex justify-start items-center gap-4 mt-10">
                        <h2 className="text-xl font-medium">{blog.title}</h2>
                        <button
                            className="py-2 px-2 border rounded-xl border-gray-400 bg-red-300 hover:bg-red-500 hover:scale-110"
                            
                        >
                            Delete Blog
                        </button>
                    </div>
                    <p>by - {blog.author}</p>
                </div>
            ))}
        </div>
    );
};
export default BlogList;
