import { IoSearchSharp } from "react-icons/io5";

const Navbar = ({ setProducts }) => {
    async function getData(e) {
        const val = e.target.value;
        const res = await fetch(`https://dummyjson.com/products/search?q=${val}`);
        const data = await res.json();
        setProducts(data.products);
        console.log("API! Called");
    }

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
                <input type="text" onChange={getData} />
                <button>
                    <IoSearchSharp />
                </button>
            </div>
            <h5>Profile</h5>
            <h5>Cart</h5>
        </nav>
    );
};

export default Navbar;
