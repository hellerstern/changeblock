import React, { useState } from "react";
import styled from "styled-components";
import styles from "../../styles/Dashboard/Dropdown.module.css";

const Dropdown = ({ user }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="me-5">
      <div className={`${styles.name}`}></div>
      <img
        className="profile-picture"
        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
        width={40}
        height={40}
        onClick={() => setShowDropdown(!showDropdown)}
        alt="profile"
      />
      <label className={`mx-2`}>{user.displayName}</label>

      {showDropdown && (
        <ul className={`position-absolute ${styles.list}`}>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
