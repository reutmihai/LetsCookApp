 import React from 'react';
 import PropTypes from "prop-types";
 import styles from "./RecipeListItem.module.css";
 
 export const RecipeListItem = ({ id, title, image }) => {
   return (
       <li className={styles.ImageGalleryItem}>
        <p>{title}</p>
         <img
           src={image}
           alt={title}
           className={styles["ImageGalleryItem-image"]}
         />
       </li>
   );
 }
 
RecipeListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RecipeListItem;