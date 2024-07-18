import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignupPage = () => {
    const loginPageStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        margin: "auto",
        padding: "24px",
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup } = useSignup();

    const handleSubmit = () => {
        const validation = true;
        if (validation) {
            signup({ email, password });
        } else {
            alert("Validation Failed");
        }
    };

    return (
        <div style={loginPageStyles}>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Sign Up</button>
        </div>
    );
};

export default SignupPage;
