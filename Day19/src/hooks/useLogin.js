const useLogin = () => {
    const login = async ({ email, password }) => {
        console.log("--login called --");

        const URL = "http://localhost:1400/api/v1/auth/login";
        const OPTIONS = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        };

        const res = await fetch(URL, OPTIONS);
        const data = await res.json();

        console.log(data);
    };

    return { login };
};

export default useLogin;
