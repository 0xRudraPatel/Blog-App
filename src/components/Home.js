import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <div className="all-blogs">
        {data && <BlogList blogs={data} title="All Blogs!" />}
      </div>
      <div className="top-author-blogs">
        {data && (
          <BlogList
            blogs={data.filter((blog) => blog.author === "Aadeetya Patil")}
            title="Top Author's Blogs!"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
