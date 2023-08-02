import { Outlet } from "react-router-dom";
import styles from "./layouts.module.scss";
import Footer from "../components/footer/index";

export const PageLayout = () => {
  return (
    <div className={styles.pageLayout}>
      <nav>Nagłówek</nav>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
