import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handelDelete = (id) => {
    const newBlogList = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogList);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      <div className="all-blogs">
        {blogs && (
          <BlogList
            blogs={blogs}
            title="All Blogs!"
            handelDelete={handelDelete}
          />
        )}
      </div>
      <div className="top-author-blogs">
        {blogs && (
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "Aadeetya Patil")}
            title="Top Author's Blogs!"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
