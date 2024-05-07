import { NavLink } from "react-router-dom";

import logo from "../assets/inventory.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src= {logo} alt="logo" className="head-img" />
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/sales">Sales</NavLink>
      </nav>
    </header>
  );
}
