import { IoSearchSharp } from "react-icons/io5";

const Navbar = ({ setSearchText, openSearchPage }) => {
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <nav className="homepage-nav">
            <h4>Amazon.in</h4>
            <p>
                Address:
                <br />
                LPU University
            </p>
            <div className="homepage-search-container">
                <select />
                <input type="text" onChange={handleSearch} />
                <button onClick={openSearchPage}>
                    <IoSearchSharp />
                </button>
            </div>
            <h5>Profile</h5>
            <h5>Cart</h5>
        </nav>
    );
};

export default Navbar;
