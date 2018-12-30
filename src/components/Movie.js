/***** IMPORTS *****/

import React, { Component } from 'react'

/***** Movie Component *****/
export default class Movie extends Component {
  render() {
      // Destructuring
      const {
          Poster,
          Title,
      } = this.props.movie

    return (
      <div className='movie'>
        <img 
            src={Poster} 
            alt="Movie Poster"
            className='poster'
        />
        <h2 className='movieTitle'>{Title}</h2>
        <button
            type='button'
            onClick={this.props.handleDetails}
            className='button'
        >
            MOVIE DETAILS
        </button>
      </div>
    )
  }
}
