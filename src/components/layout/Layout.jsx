/* eslint-disable react/prop-types */
import styles from "./Layout.module.css";
import { useDarkmode } from "../../hooks/UseDarkmode";
export const Layout = ({ children }) => {
  const [theme] = useDarkmode();
  return (
    <main
      className={styles.layout}
      style={{
        background: theme ? "hsl(230, 17%, 14%)" : "white",
        transition: "0.3s",
      }}
    >
      {children}
    </main>
  );
};
