import { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import AppContext from "../context/appContext";

const CategoryBar = () => {
    const { categories } = useContext(AppContext);
    return (
        <div className="homepage-category-bar">
            <button>
                <RxHamburgerMenu />
                All
            </button>
            <div className="category-items">
                {categories.map((elem) => {
                    return <p key={elem}>{elem}</p>;
                })}
            </div>
        </div>
    );
};

export default CategoryBar;
