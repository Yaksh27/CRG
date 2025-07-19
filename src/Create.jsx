import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Don't include ID - let json-server auto-generate it
    const blog = { title, body, author };

    console.log("Sending blog data:", blog);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(blog)
    })
      .then(res => {
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("New blog created:", data);
      
        setIsLoading(false);
       
      })
      .catch(err => {
        console.error("Error creating blog:", err);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          value={title}
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          className="ml-5 px-6 mt-10 py-2 border border-gray rounded-xl"
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
          className="px-6 ml-5 mt-10 py-2 border border-gray rounded-xl"
          rows="4"
        />
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="px-6 ml-5 mt-10 py-2 border border-gray rounded-xl"
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isLoading && (
          <button
            type="submit"
            className="px-6 mt-10 py-2 border-2 ml-5 border-gray-800 bg-green-400 rounded-xl"
          >
            Add Blog
          </button>
        )}
        {isLoading && (
          <button
            disabled
            className="px-6 mt-10 py-2 border-2 ml-5 border-gray-800 bg-green-400 rounded-xl"
          >
            Adding...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;