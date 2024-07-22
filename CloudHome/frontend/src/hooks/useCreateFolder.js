import { useSelector } from "react-redux";

const useCreateFolder = () => {
    const { token } = useSelector((e) => e.auth);

    const createFolder = async ({ name }) => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/folder/create`, {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                }),
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer " + token,
                },
            });
            const data = await res.json();
            alert(data.message);
        } catch (err) {
            alert(err.message);
        }
    };

    return { createFolder };
};

export default useCreateFolder;
