import React from "react";
// import '../../styles/styles.css'
import './header.css'


function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          {props.children}
        </div>
      </div>
    </header>
  );
}

export default Header;
