/***** IMPORTS *****/

import React, { Component } from 'react'

/***** Search Component *****/
export default class Search extends Component {
  render() {
  
  // Destructuring
  const { value, handleChange, handleSubmit } = this.props

    return (
      <div className='searchContainer'>
        <h1 id='title'>Search For Movies</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='search'
                placeholder='Search for a movie...'
                onChange={handleChange}
                value={value}
                className='searchInput'
            />
            <button
                type='submit'
                className='button searchBtn'
            >
                <i className="fas fa-search"></i>
            </button>
        </form>
      </div>
    )
  }
}
