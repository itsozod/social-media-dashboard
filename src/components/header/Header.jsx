import styles from "./Header.module.css";
import { useDarkmode } from "../../hooks/UseDarkmode";

export const Header = () => {
  const [theme, themeChange] = useDarkmode();
  return (
    <header
      className={styles.header}
      style={{
        background: theme ? "hsl(230, 17%, 14%)" : "white",
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
              defaultChecked={theme}
              onChange={() => themeChange()}
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
