import "./styles.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left-items">
                <h3>Cloud Home</h3>
            </div>
            <div className="navbar-right-items">
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
