import Dropdown from "./Dropdown";
import styles from "../../styles/Dashboard/navbar.module.css";

const DashboardNavbar = ({ user }) => {
  return (
    <nav
      className={`navbar navbar-expand-md bg-white ${styles.navbar_wrapper}`}
    >
      <a className="navbar-brand" href="/">
        <img src="images/logo-black.png" alt="Logo" />
      </a>
      <label className="ms-5">Dashboard</label>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Dropdown user={user} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
