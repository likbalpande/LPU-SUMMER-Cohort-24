const useVerifyOtp = () => {
    const verifyOtp = async (otp) => {
        const res = await fetch(`${process.env.BACKEND_URL}/api/v1/otp/verify`, {
            method: "POST",
            body: JSON.stringify({ otp }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        alert(data.message);
    };

    return { verifyOtp };
};

export default useVerifyOtp;
