import { Link } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list py-5">
      <div className="container">
        <h2 className="text-center">{title}</h2>
        <span className="line"></span>
        <div className="row">
          {blogs.slice(-3).reverse().map((blog) => (
            <div className="col-lg-4 col-md-4 col-12" key={blog.id}>
              <div className="blog-preview shadow-sm rounded">
                <h5>{blog.title}</h5>
                <p className="mt-3">{blog.description}</p>
                <small>
                  <span></span> {blog.author}
                </small>
                <br />
                <Link
                  to={`/blogs/${blog.id}/${blog.title.replace(/\s+/g, "_")}`}
                >
                  View details <i className="fas fa-chevron-right text-sm"></i>
                </Link>
              </div>
            </div>
          ))}
          <div className="col-lg-12 col-md-12 col-12 text-center">
            <Link to="/blogs" className="btn bg-color my-3 px-5 py-3 b50 text-white shadow-sm">
              View All Blogs <i className="fas fa-chevron-right text-sm"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
