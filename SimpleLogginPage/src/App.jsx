import React, { useState } from "react";
import Header from "./Header";
import LoginPage from "./LoginPage";
import VerifyPage from "./VerifyPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleLogin = (phone) => {
    setPhoneNumber(phone);
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", generatedOtp);
    setOtp(generatedOtp);
  };

  const handleVerify = (enteredOtp) => {
    if (enteredOtp === otp) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      {!isLoggedIn ? (
        !otp ? (
          <LoginPage onLogin={handleLogin} />
        ) : (
          <VerifyPage onVerify={handleVerify} />
        )
      ) : (
        <h2>Welcome, User!</h2>
      )}
    </div>
  );
};

export default App;
