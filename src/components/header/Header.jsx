import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.social}>
          <h1>Social Media Dashboard</h1>
          <p>Total followers: 23, 004</p>
        </div>
        <div className={styles.darkmode}>
          <p>Darkmode</p>
        </div>
      </nav>
    </header>
  );
};
