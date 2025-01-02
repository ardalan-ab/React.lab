import React from "react";

const Header = ({ isLoggedIn }) => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "#fff" }}>
      <h1>Login App</h1>
      {isLoggedIn ? (
        <div className="user-icon">👤</div>
      ) : (
        <button style={{ cursor: "pointer" }} onClick={() => alert("Please log in!")}>
          Log In
        </button>
      )}
    </header>
  );
};

export default Header;