import React, { useState } from "react";

const VerifyPage = ({ onVerify }) => {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    onVerify(otp);
  };

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h2>Verify OTP</h2>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        style={{ padding: "10px", width: "200px" }}
      />
      <br />
      <button onClick={handleVerify} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Verify
      </button>
    </div>
  );
};

export default VerifyPage;