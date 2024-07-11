import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
    const { login } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        const validate1 = email.length > 4;
        const validate2 = password.length >= 8;
        if (validate1 && validate2) {
            login({ email, password });
        } else if (!validate1) {
            alert("Incorrect Email");
        } else {
            alert("Password must be greater than 7 characters");
        }
    };

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={validate}>Login</button>
        </div>
    );
};

export default Login;
