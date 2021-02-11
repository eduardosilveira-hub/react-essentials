const Create = () => {
    return (
        <div className="create">
            <h2>Add new blog</h2>
            <form>
                <label>Blog Title: </label>
                <input 
                    type="text"
                    required
                />

                <label>Blog body: </label>
                <textarea required>

                </textarea>

                <label>Blog author: </label>
                <select>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
            </form>
        </div>
    );
}
 
export default Create;