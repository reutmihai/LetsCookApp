import React, { Component } from 'react';
import styles from '../Searchbar/Searchbar.module.css';

export default class Searchbar extends Component {
    state = {
        searchQuery: '',
    }

    handleSubmit = e => {
        e.preventDefault();
        const { searchQuery } = this.state;
        if(searchQuery.trim() === '') {
            alert('Please enter a recipe name');
            return;
        }

        this.props.onFormSubmit(searchQuery);
        this.setState({ searchQuery: ''});
    }

    handleChange = e => {
        const { value } = e.target;
        this.setState({ searchQuery: value });
    }

  render() {
    return (
      <div>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles["SearchForm-button"]}>
              <span className={styles["SearchForm-button-label"]}>Search</span>
            </button>

            <input
              className={styles["SearchForm-input"]}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search recipes"
              value={this.state.searchQuery}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}
