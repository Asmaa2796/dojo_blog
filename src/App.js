import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from "./NotFound";
import Edit from "./components/Edit";
import Footer from './Footer';
import AllBlogs from './components/AllBlogs';
import Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/blogs/create" element={<Create/>} />
          <Route path="/blogs/edit/:id/:title" element={<Edit/>} />
          <Route path="/blogs/:id/:title" element={<BlogDetails/>} />
          <Route path="/blogs" element={<AllBlogs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;