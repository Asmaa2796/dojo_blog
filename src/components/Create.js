import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [author,setAuthor] = useState('Asmaa');
    const [category,setCategory] = useState('');
    const [isPending,setIsPending] = useState(false);
    const navigate = useNavigate();
    
  
    // post data
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,description,author,category};
        setIsPending(true);

        setTimeout(() => {
            let url = "https://dojo-api.onrender.com/blogs";
            fetch(url,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(blog)
            })
            .then(() => {
                setIsPending(false);
                navigate("/blogs");
            })
          },1000);
    }
    return (
      <div className="container">
        <div className="create my-5">
          <h2>Add a New Blog</h2>
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              required
              type="text"
              placeholder="Type a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Description</label>
            <textarea
              required
              placeholder="Type a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label>Author</label>
            <select
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="Asmaa">Asmaa</option>
              <option value="test">test</option>
            </select>
            <label>
              Category
            </label>
            <select value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value="React js">React js</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Css">Css</option>
            </select>
          
            {!isPending && <button>Submit</button>}
            {isPending && <div className="loader"></div>}
          </form>
        </div>
      </div>
    );
}

export default Create;
