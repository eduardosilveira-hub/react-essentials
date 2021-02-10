const Navbar = () => {
    const createStyle = {
        color: "white",
        backgroundColor: '#f1356d',
        borderRadius: '8px'
    }

    return ( 
        <nav className = "navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" 
                    style={ 
                    createStyle
                    }
                >New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
