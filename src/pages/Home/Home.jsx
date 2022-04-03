import React from "react";
import styles from "./Home.module.scss";
import { Header } from '../../components'

export function Home(prop) {
  return (
    <React.Fragment>
      <div className={styles.Home}>
        <Header />
      </div>
    </React.Fragment>
  );
}
