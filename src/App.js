/***** IMPORTS *****/

import React, { Component } from 'react';
import './App.css';

import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails';


class App extends Component {
  state = {
    movies: [],
    searchInput: '',
    searchedFor: '',
    index: 0,
    movieID: '',
    error: ''
  }

  /***** MAKE API REQUEST AND RECEIVE DATA*****/
  async getMovies() {
    try{
      // Make Request to API
      const data = await fetch(`https://www.omdbapi.com/?s=${this.state.searchedFor}&apikey=d3561ec4`)
      // Convert Response into json
      const jsonData = await data.json()

      // Check If There Is Results
      if(jsonData.Search === undefined) {
        // Display if there is no results
        this.setState(() => {
          return {error: 'No Results Found'}
        })
      } else {
        // Populate State With Data If There Are Results
        this.setState(() => {
          return {movies: jsonData.Search, error: ''}
        })
      }

    } catch(error) {
      console.log(error)
    }
  }
  
  /***** METHODS *****/

  // Handle Form Submit
  handleSubmit = (e) => {
    // Prevent Default Actions(Prevent Page Reloading)
    e.preventDefault()

    // Call Method to Make Request to API
    this.getMovies()

    // Clear searchInput value in state
    this.setState({
      searchInput: ''
    })
  }

  // Set State Values to the Value in the Text Input
  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
      searchedFor: e.target.value
    })
  }

  // Update Page Index Value in State
  handleIndex = index => {
    this.setState({
      index: index
    })
  }

  // Update Index and movieID Values in State
  handleDetails = (index, id) => {
    this.setState({
      index: index,
      movieID: id
    })
  }

  /***** Conditional To Determine Which Components to Display *****/
  displayPage = index => {
    switch(index) {
      // If index Value in State is 0, Display the MovieList Component
      case 0: 
        return (
          <MovieList 
            movies={this.state.movies}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.searchInput}
            handleDetails={this.handleDetails}
            error={this.state.error}
          />
        )
      // If index Value in State is 1, Display the MovieDetails Component
      case 1:
        return (
          <MovieDetails 
            handleIndex={this.handleIndex}
            id={this.state.movieID}
          />
        )
        default:
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.displayPage(this.state.index)}
      </React.Fragment>
    );
  }
}

export default App;