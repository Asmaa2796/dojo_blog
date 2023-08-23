import ScrollToTop from "./components/ScrollToTop";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <footer className="text-center py-3 text-white">
                <p>All Rights Reserved &copy; Asmaa Saad 2023</p>
                <div className="line bg-white"></div>
                <div className="social">
                    <Link className="d-inline-block mx-2 text-white" to={"https://www.behance.net/asmaasaad7"}><i className="fab fa-behance"></i></Link>
                    <Link className="d-inline-block mx-2 text-white" to={"https://github.com/asmaa2796"}><i className="fab fa-github"></i></Link>
                </div>
            </footer>
            <ScrollToTop/>
        </div>
    );
}

export default Footer;
