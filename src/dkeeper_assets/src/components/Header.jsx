import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header({ isLoggedIn, onLogout }) {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
      {isLoggedIn && (
        <button onClick={onLogout} style={{ position: 'absolute', right: '20px', top: '20px' }}>
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
