import { useState } from "react";

const OtpPage = () => {
    const [otp, setOtp] = useState();

    const handleSubmit = () => {
        console.log("otp is", otp);
    };

    return (
        <div className="otp-page-container">
            <p>Email :</p>
            <input type="number" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <button onClick={handleSubmit}>Verify</button>
        </div>
    );
};

export default OtpPage;
