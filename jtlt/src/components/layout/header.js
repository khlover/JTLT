import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Learn Japanese with Twitter</h1>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  textAlign: "center",
  padding: "10px",
};

export default Header;
