import { Outlet } from "react-router-dom";
import styles from "./layouts.module.scss";

export const PageLayout = () => {
  return (
    <div className={styles.pageLayout}>
      <nav>Nagłówek</nav>
      <main>
        <Outlet/>
      </main>
      <footer>Stopka</footer>
    </div>
  )
}
