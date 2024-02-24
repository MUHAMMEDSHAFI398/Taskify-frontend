import React from 'react'
import Logo from "assets/icons/logo.png"

const LogoLoader = () => {
  return (
    <div className="loader">
      <img
        width="100px" height="100px"
        src={Logo} alt="Logo"
        className="initial-logo-flash"
      />
    </div>
  );

}

export default LogoLoader

