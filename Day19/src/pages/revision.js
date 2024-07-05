import { useEffect, useState } from "react";
import NavbarR from "./navbarR";

const Revision = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const [color, setColor] = useState([]);

    const getData = async () => {
        const req = await fetch(`https://dummyjson.com/products/search?q=${text}`);
        const arr = await req.json();
        setData(arr.products);
    };

    useEffect(() => {
        getData();
    }, [text]);

    const handleColorChange = () => {
        const num = Math.floor(Math.random() * 255);
        setColor(`rgb(${num}, ${num}, ${num})`);
    };

    return (
        <>
            <div onClick={handleColorChange}>
                <NavbarR setText={setText} />
            </div>
            <h2 style={{ backgroundColor: color }}>{text}!</h2>
            {data.map((elem) => {
                return <h3>{elem.title}</h3>;
            })}
        </>
    );
};

export default Revision;
