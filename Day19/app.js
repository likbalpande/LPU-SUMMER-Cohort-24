import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import HomePage from "./src/Pages/homePage";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = () => {
    return (
        <div>
            <HomePage />
        </div>
    );
};

root.render(<App />);
