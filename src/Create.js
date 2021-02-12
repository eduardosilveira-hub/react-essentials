import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsloading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsloading(true);
        const blog = { title, body, author }
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            })
            .then(() => {
                setIsloading(false);
                history.push('/');
            })}, 1000
        );
    }

    return (
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title: </label>
                <input 
                    type="text"
                    required
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                />

                <label>Blog body: </label>
                <textarea 
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                />

                <label>Blog author: </label>
                <select value={ author }
                onChange={ (e) => setAuthor(e.target.value) }>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                <button>{isLoading ? "Loading..." : "Add Blog" }</button>
            </form>
        </div>
    );
}
 
export default Create;