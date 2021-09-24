// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import styles from "./HomeRtl.module.scss";

const HomeRtl = () => {
  return (
    <div className={styles.homeRtl}>
      <div className={styles.header}>
        <p className={styles.ltrRtlMarkdownEditor}>
          {/* className={styles.ltrRtlMarkdownEditorEmphasis1} */}
          Markdown Editor
        </p>
        {/*  <div className={styles.buttons}>
          <Button className={styles.button} />
          <Button className={styles.button} />
        </div> */}
      </div>
      <div className={styles.buttons}>
        <div className={styles.rectangle1} />
        <div className={styles.rectangle2} />
      </div>
    </div>
  );
};

export default HomeRtl;
