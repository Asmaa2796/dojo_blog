import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";

const Edit = () => {
  const { id } = useParams();
  const { error } = useFetch("https://dojo-api.onrender.com/blogs/" + id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const getSingleRecord = () => {
    let url = "https://dojo-api.onrender.com/blogs/";
    fetch(url + id)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setAuthor(data.author);
        setAuthor(data.category);
      });
    };

    useEffect(() => {
        getSingleRecord();
    }, []);

    // update data
    const handleUpdate = (e) => {
      e.preventDefault();
      const blog = {title,description,author,category};
      setIsPending(true);

      setTimeout(() => {
          let url = "http://localhost:9000/blogs/";
          fetch(url + id,{
              method:"PUT",
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
      <div className="edit-blog my-5">
        {error && <div>{error}</div>}
        <form onSubmit={handleUpdate}>
          <h2>Edit Blog</h2>
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
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
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

          {!isPending && <button type="submit">Update</button>}
          {isPending && <div className="loader"></div>}
        </form>
      </div>
    </div>
  );
};

export default Edit;
