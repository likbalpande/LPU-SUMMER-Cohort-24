const useSignup = () => {
    const signup = async ({ email, password }) => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/signup`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "content-type": "application/json",
                },
            });
            console.log(res);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            alert("Signup error: " + err.message);
        }
    };
    return { signup };
};

export default useSignup;
