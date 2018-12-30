/***** IMPORTS *****/

import React, { Component } from 'react'

/***** MovieDetails Component *****/
export default class MovieDetails extends Component {
  constructor() {
      super()
      this.state = {
          movie: []
      }
  }

  /***** Make Request to API and Receive Data *****/
  async componentDidMount() {
    try {
      // Send Request to API
      const data = await fetch(`https://www.omdbapi.com/?i=${this.props.id}&apikey=d3561ec4`)

      // Convert Response into json
      const jsonData = await data.json()

      // Populate State With Data
      this.setState({movie: jsonData})
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    // Destructuring
    const { handleIndex } = this.props
    const { Title, 
            Poster, 
            Actors, 
            Awards, 
            Country, 
            Director, 
            Genre, 
            Language, 
            Plot, 
            Rated, 
            Released, 
            Runtime, 
            Writer, 
            imdbRating,
            imdbID
        } = this.state.movie

        console.log(this.state.movie)
    return (
      <div className='pageContainer'>
        <div className='detailsContainer'>
           <div className="posterContainer">
            <img 
              src={Poster} 
              alt="Movie Poster"
              className='detailsPoster'
          />
            <h1 className='detailTitle'>{Title}</h1>
          </div>
          <div className="listContainer">
            <ul className='detailsList'>
                <li>GENRE: {Genre}</li>
                <li>RELEASED: {Released}</li>
                <li>RATED: {Rated}</li>
                <li>RUNTIME: {Runtime}</li>
                <li>DIRECTOR: {Director}</li>
                <li>WRITER: {Writer}</li>
                <li>ACTORS: {Actors}</li>
                <li>LANGUAGE: {Language}</li>
                <li>COUNTRY: {Country}</li>
                <li>IMDb RATING: {imdbRating}</li>
                <li>AWARDS: {Awards}</li>
            </ul>
          </div>
          <p className='plot'>PLOT: {Plot}</p>
        </div>
        <button type='button' className='button imdbBtn' > 
          <a 
            href={`http://imdb.com/title/${imdbID}`}
            target="_blank"
            rel='noopener noreferrer'
          >
            VIEW ON IMDB
          </a>
        </button>
        <button
            type='button'
            onClick={()=>handleIndex(0)}
            className='button'
        >
            BACK TO SEARCH
        </button>
      </div>
    )
  }
}
