import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [phone, setPhone] = useState("");

  const validatePhoneNumber = () => {
    const phoneRegex = /^[0-9]{11}$/;
    if (phoneRegex.test(phone)) {
      onLogin(phone);
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h2>Enter Your Phone Number</h2>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        style={{ padding: "10px", width: "200px" }}
      />
      <br />
      <button onClick={validatePhoneNumber} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Get OTP
      </button>
    </div>
  );
};

export default LoginPage;