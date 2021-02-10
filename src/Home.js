import { useState, useEffect } from "react";
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => { 
                if(!res.ok){
                    throw Error("Could not fetch data from resource");
                }
                return res.json() 
            })
            .then(data => {
                setError(null);
                setBlogs(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        </div>
    );
}

export default Home;