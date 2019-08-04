import React from "react";

import Logo from "./facebook.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} />
      </nav>
      <div className="side">
        <strong>Meu perfil</strong>
        <i className="material-icons">account_circle</i>
      </div>
    </header>
  );
}
