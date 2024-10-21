import React, { Component } from "react";
import { searchRecipes } from "../src/services/newRecipe";
import Searchbar from "./components/Searchbar/Searchbar";
import styles from "./App.module.css";
import { RecipeList } from "./components/RecipeList/RecipeList";

export default class App extends Component {
  state = {
    searchQuery: "",
    recipes: [],
    page: 1,
    error: "",
  };

  handleSearchSubmit = async (searchQuery) => {
    try {
      this.setState({ searchQuery, page: 1, error: "" });
      const recipes = await searchRecipes(searchQuery); 
      console.log(recipes);
      if (recipes.length === 0) {
        this.setState({ recipes: [], error: "N-a fost gasita nicio reteta." });
      } else {
        this.setState({ recipes });
      }
    } catch (error) {
      this.setState({ recipes: [], error: "A aparut o eroare la cautare." });
    }
  };

  render() {
    const { recipes, error } = this.state; 

    return (
      <div className={styles.App}>
        <Searchbar onFormSubmit={this.handleSearchSubmit} />
        {error && <p className={styles.Error}>{error}</p>}{" "}
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}
