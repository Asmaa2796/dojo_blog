import Header from "./components/Header";
import BlogList from "./components/BlogList";
import Skeleton from "./components/Skeleton";
import UseFetch from "./useFetch";
import GetQuote from "./components/GetQuote";
import Accordion from "./components/Accordion";
import Services from "./components/Services";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = UseFetch("https://dojo-api.onrender.com/blogs");
  return (
    <div className="home-content">
      {/* header */}
      <Header />
      {/* get quote */}
      <GetQuote />
      {/* blogs */}
      {error && <div>{error}</div>}
      {isPending && <Skeleton />}
      {blogs && <BlogList blogs={blogs} title="Blogs" />}
      {/* services */}
      <Services/>
      {/* accordion */}
      <Accordion/>
    </div>
  );
};

export default Home;
