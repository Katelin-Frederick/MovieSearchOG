/***** IMPORTS *****/

import React, { Component } from 'react'
import Search from './Search'
import Movie from './Movie'


/***** MovieList Component *****/
export default class MovieList extends Component {
    // Update Index and movieID Values in State
    handleDetails = (index, id) => {
        this.setState({
          index: index,
          movieID: id
        })
      }
      
  render() {
    // Destructuring
    const { movies, handleDetails, searchInput, handleChange, handleSubmit, error } = this.props

    return (
      <React.Fragment>
        <Search 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={searchInput}
        />
        <div className='moviesContainer'>
           {error ? <h1 className='error'>{error}</h1> :
                movies.map(movie => {
                    return (
                        <Movie 
                            key={movie.imdbID}
                            movie={movie}
                            handleDetails={()=>handleDetails(1, movie.imdbID)}
                            id={movie.imdbID}
                        />
                    )
                })
           }
            
        </div>
      </React.Fragment>
    )
  }
}
