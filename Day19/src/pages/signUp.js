import { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
    const { signUp } = useSignUp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        let validation = true;
        if (validation) {
            signUp({ email, password });
        } else {
            alert("Validation error...");
        }
    };

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={validate}>Sign Up</button>
        </div>
    );
};

export default SignUp;
