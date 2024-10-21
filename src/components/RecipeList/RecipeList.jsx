import React from 'react';
import PropTypes from "prop-types";
import RecipeListItem from '../RecipeListItem/RecipeListItem';
import styles from "./RecipeList.module.css";

export const RecipeList = ({ recipes }) => {
  return (
    <ul className={styles.ImageGallery}>
    {recipes.map(({ id, title, image }) => (
      <RecipeListItem
        key={id}
        id={id}
        title={title}
        image={image}
      />
    ))}
  </ul>
  )
}
RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecipeList;