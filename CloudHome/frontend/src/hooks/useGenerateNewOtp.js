import { useSelector } from "react-redux";

const useGenerateNewOtp = () => {
    const { token } = useSelector((e) => e.auth);

    const generateNewOtp = async () => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/otp/generate`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();

            if (data.status === "success") {
                alert(data.message);
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return { generateNewOtp };
};

export default useGenerateNewOtp;
