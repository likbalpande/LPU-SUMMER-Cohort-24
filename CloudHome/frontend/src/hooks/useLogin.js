import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const navigate = useNavigate();

    const login = async ({ email, password }) => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/login`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "content-type": "application/json",
                },
            });
            const data = await res.json();
            console.log(data);
            if (data.status === "success") {
                navigate(`/`);
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert("Login error: " + err.message);
        }
    };
    return { login };
};

export default useLogin;
