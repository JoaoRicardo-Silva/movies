import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  });

  return (
    <div className={`nav-container> ${show && "nav-container-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netlix"
      />
      <img
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Grey_-_Rounded_borded_-_Add_user_%28Deus_WikiProject%29.png/640px-Grey_-_Rounded_borded_-_Add_user_%28Deus_WikiProject%29.png"
        alt="RICKdev"
      />
    </div>
  );
}

export default Navbar;
