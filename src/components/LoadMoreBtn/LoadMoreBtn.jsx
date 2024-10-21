import React from 'react';
import PropTypes from "prop-types";
import styles from '../LoadMoreBtn/LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick, visible }) => {
    if(!visible) return null;
  return (
    <button className={styles.Button} onClick={onClick}>Load more</button>
  )
}

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
};

export default LoadMoreBtn;