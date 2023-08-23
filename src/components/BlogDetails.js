import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Skeleton from "./Skeleton";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog,isPending,error} = useFetch("https://dojo-api.onrender.com/blogs/" + id);
    const navigate = useNavigate();
    const handleDelete = () => {
        let url = "https://dojo-api.onrender.com/blogs/";
        fetch(url + blog.id,{
            method:"DELETE",
        })
        .then(() => {
            navigate("/blogs");
        })
    }
   
    return (
      <div className="container">
        <div className="blog-details py-5">
          {isPending && <Skeleton />}
          {error && <div>{error}</div>}
          {blog && (
            // blog content
            <div className="blog-content rounded shadow-sm p-4">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/blogs">All Blogs</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {blog.title}
                  </li>
                </ol>
              </nav>
              <hr />
              <h2>Blog details - {blog.id}</h2>
              <h4>
                <i className="fas fa-caret-right text-color1 text-md"></i>{" "}
                {blog.title}
              </h4>
              <p className="my-4">{blog.description}</p>
              <small>
                <span></span> {blog.author}
              </small>
              <div className="d-flex align-items-center justify-content-between">
                <div className="flx">
                  <button onClick={handleDelete} className="delete shadow-sm">
                    Delete
                  </button>
                  <Link
                    to={`/blogs/edit/${blog.id}/${blog.title.replace(
                      /\s+/g,
                      "_"
                    )}`}
                    className="edit shadow-sm"
                  >
                    Edit
                  </Link>
                </div>
                <div className="mb-2">
                  <span className="text-md mx-2 text-color font-weight-bold">Category:</span>
                  <div className="category">
                    <i className="fas fa-tag"></i> {blog.category}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default BlogDetails;
