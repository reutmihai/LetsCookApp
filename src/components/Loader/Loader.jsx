import React from 'react';
import ReactLoading from "react-loading";
import styles from '../Loader/Loader.module.css'

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <ReactLoading type='spin' color='orange' height={50} width={50} />
    </div>
  );
}

export default Loader;
