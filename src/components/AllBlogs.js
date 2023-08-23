import { useState } from "react";
import UseFetch from "../useFetch";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
const AllBlogs = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = UseFetch("https://dojo-api.onrender.com/blogs");
  const [search,setSearch] = useState('');
 
  return (
    <div className="all_blogs py-5">
      <div className="container">
        <h2 className="text-center text-color">All Blogs</h2>
        <span className="line"></span>
        <label className="d-block my-3 text-lg label">
          <i className="fas fa-caret-right text-color1"></i>
          <span>Serach</span>
        </label>
        <input
          type="text"
          className="form-control mb-3 search"
          placeholder="Filter Blogs"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="row">
          {error && { error }}
          {isPending && <Skeleton />}
          {blogs && (
            <>
              {blogs
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.title.toLowerCase().includes(search);
                })
                .reverse()
                .map((blog) => (
                  <div className="col-lg-4 col-md-4 col-12" key={blog.id}>
                    <div className="blog-preview shadow-sm rounded">
                      <h5>{blog.title}</h5>
                      <p className="mt-3">{blog.description}</p>
                      <small>
                        <span></span> {blog.author}
                      </small>
                      <br />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="mb-2">
                          <div className="text-sm text-color font-weight-bold">
                            Category:
                          </div>
                          <div className="category">
                            <i className="fas fa-tag"></i> {blog.category}
                          </div>
                        </div>
                        <Link
                          className="mt-3"
                          to={`/blogs/${blog.id}/${blog.title.replace(
                            /\s+/g,
                            "_"
                          )}`}
                        >
                          View details
                          <i className="fas fa-chevron-right text-xs"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;