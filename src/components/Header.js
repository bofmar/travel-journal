import React from "react";
import logo from '../images/earth.svg';

export default function Header() {
  return (
    <header>
      <img src={logo} alt='icon of earth' />
      <h1>my travel journal</h1>
    </header>
  );
}
