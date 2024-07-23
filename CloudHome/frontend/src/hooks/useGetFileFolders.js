import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useGetFileFolders = () => {
    const { token } = useSelector((e) => e.auth);
    const [fileFolders, setFileFolders] = useState([]);

    const getFileFolders = async () => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/file-folder`, {
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer " + token,
                },
            });
            const data = await res.json();
            setFileFolders(data.data.fileFolders);
        } catch (err) {
            alert(err.message);
        }
    };

    useEffect(() => {
        getFileFolders();
    }, []);

    return { getFileFolders, fileFolders };
};

export default useGetFileFolders;
