import { useDispatch, useSelector } from "react-redux";
import { appLogout, emailVerified } from "../store/slices/authSlice";

const useVerifyOtp = () => {
    const { token } = useSelector((e) => e.auth);
    const dispatch = useDispatch();

    const verifyOtp = async (otp) => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/otp/verify`, {
                method: "POST",
                body: JSON.stringify({ otp }),
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer " + token,
                },
            });
            const data = await res.json();

            if (data.message === "Unauthorized") {
                dispatch(appLogout());
            } else if (data.status === "success") {
                dispatch(emailVerified());
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return { verifyOtp };
};

export default useVerifyOtp;
