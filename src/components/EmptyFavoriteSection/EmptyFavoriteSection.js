import React from "react";

import styles from "./EmptyFavoriteSection.module.scss";

function EmptyFavoriteSection() {
  return (
    <div className={styles.wrapper}>
      You have not add any games to favorite yet :(
    </div>
  );
}

export default EmptyFavoriteSection;
