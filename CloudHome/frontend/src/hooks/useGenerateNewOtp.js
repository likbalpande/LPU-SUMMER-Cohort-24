import { useDispatch, useSelector } from "react-redux";
import { appLogout } from "../store/slices/authSlice";

const useGenerateNewOtp = () => {
    const { token } = useSelector((e) => e.auth);
    const dispatch = useDispatch();

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
            } else if (data.message === "Unauthorized") {
                dispatch(appLogout());
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
