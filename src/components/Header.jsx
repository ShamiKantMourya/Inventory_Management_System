import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import StorageIcon from "@mui/icons-material/Storage";

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
        <NavLink
          to="https://github.com/ShamiKantMourya/Inventory_Management_System_Backend"
          target="_blank"
        >
          <GitHubIcon />
        </NavLink>
        <NavLink
          to="https://replit.com/@shamiMourya/InventoryManagementSystem"
          target="_blank"
        >
          <StorageIcon />
        </NavLink>
      </nav>
    </header>
  );
}
