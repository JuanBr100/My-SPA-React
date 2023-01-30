import styles from "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/portfolio"
        >
          Portfólio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/biografia"
        >
          Biografia
        </NavLink>
        {/* <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/contato"
        >
          Contato
        </NavLink> */}
      </nav>
    </>
  );
};

export default Navbar;
