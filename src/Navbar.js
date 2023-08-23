import { Link } from "react-router-dom";
import DarkMode from "./components/DarkMode";
import { useState } from "react";
const Navbar = () => {
    const [open,setIsOpen] = useState(false);
    const openNav = () => setIsOpen(!open);
    const closeNav = () => setIsOpen(false);
    const sideNavLinks = [
      {
        path: "/",
        text: "Home",
        icon: "fa-home",
      },
      {
        path: "/about",
        text: "About",
        icon: "fa-question-circle",
      },
      {
        path: "/services",
        text: "Services",
        icon: "fa-gear",
      },
      {
        path: "/blogs",
        text: "Blogs",
        icon: "fa-pen",
      },
      {
        path: "/blogs/create",
        text: "New Blog",
        icon: "fa-plus",
      }
    ];
    return (
      <>
        <nav className="navbar py-3 shadow-sm">
          <div className="container">
            <Link to="/">
              <h3>The Dojo Blog</h3>
            </Link>
            <div className="navbar-links">
              <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/blogs">Blogs</Link>
                <Link className="new-blog" to="/blogs/create">
                  New Blog
                </Link>
              </div>
              <div className="actions">
                <img src={"../align-right.png"} className="openNav" width="30px" onClick={openNav}/>
                <DarkMode />
              </div>
            </div>
          </div>
        </nav>
        {/* side nav */}
        <div className={`side-nav ${open ? 'open':'close'}`}>
            <button className="times btn m-3" onClick={closeNav}>
              <i className="fas fa-times"></i>
            </button>
            <ul className="list-unstyled p-4 mt-5 mb-0">
              {sideNavLinks.map((link,index) => (
                <li key={index}>
                  <Link className="text-color" to={link.path} onClick={closeNav}>
                    <i className={`fas ${link.icon}`}></i>
                    {link.text}
                    </Link>
                </li>
              ))}
            </ul>
          </div>
      </>
    );
}

export default Navbar;
