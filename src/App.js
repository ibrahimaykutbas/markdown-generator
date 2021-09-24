import React from "react";
import styles from "./components/HomeRtl.module.scss";

import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.homeRtl}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
