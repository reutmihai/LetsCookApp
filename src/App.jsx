import React, { Component } from "react";
import { searchRecipes } from "../src/services/newRecipe";
import Searchbar from "./components/Searchbar/Searchbar";
import styles from "./App.module.css";
import { RecipeList } from "./components/RecipeList/RecipeList";
import { jsx } from "react/jsx-runtime";
import { Loader } from "./components/Loader/Loader";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";

export default class App extends Component {
  state = {
    searchQuery: "",
    recipes: [],
    page: 1,
    error: "",
    isLoading: false,
  };

  handleSearchSubmit = async (searchQuery) => {
    try {
      this.setState({ searchQuery, page: 1, error: "", isLoading: true });
      const recipes = await searchRecipes(searchQuery);
      console.log(recipes);
      if (recipes.length === 0) {
        this.setState({ recipes: [], error: "N-a fost gasita nicio reteta." });
      } else {
        this.setState({ recipes });
      }
    } catch (error) {
      this.setState({ recipes: [], error: "A aparut o eroare la cautare." });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreRecipes = async () => {
    this.setState((prevState) => ({
      isLoading: true,
      page: prevState.page + 1,
    }));
    const { searchQuery, page } = this.state;

    try {
      const recipes = await searchRecipes(searchQuery, page);
      this.setState((prevState) => ({
        recipes: [...prevState.recipes, ...recipes]
      }));
    } catch (error) {
      this.setState({ error: "A aparut o eroare la incarcarea retetelor." });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { recipes, error, isLoading } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onFormSubmit={this.handleSearchSubmit} />
        <div>
          {error && <p className={styles.error}>{error}</p>}
          {isLoading ? <Loader /> : <RecipeList recipes={recipes} />}
        </div>
        <LoadMoreBtn
          onClick={this.loadMoreRecipes}
          visible={recipes.length > 0 && !isLoading}
        />
      </div>
    );
  }
}
