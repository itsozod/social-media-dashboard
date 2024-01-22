import styles from "./Header.module.css";
import { useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState(false);
  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: theme ? "black" : "white",
        transition: "0.3s",
        color: theme ? "white" : "black",
      }}
    >
      <nav>
        <div className={styles.social}>
          <h1>Social Media Dashboard</h1>
          <p>Total followers: 23, 004</p>
        </div>
        <div className={styles.darkmode}>
          <p>Darkmode</p>
          <label className={styles.switch}>
            <input
              onChange={() => setTheme((prevTheme) => !prevTheme)}
              type="checkbox"
              className={styles.inp_checkbox}
            ></input>
            <span className={styles.slider}></span>
          </label>
        </div>
      </nav>
    </header>
  );
};
