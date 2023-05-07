import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'EVH4QXDNItOCU07AilgFDFKzoWxPCAer';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

    state = { reviews: [] }
  
  
    componentDidMount = () => {
      fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          const reviews = data.results
          console.log(reviews)
          this.setState({ reviews: reviews })
        })
    }
  
    render(){
      return(
        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews} header="Latest Reviews"/>
        </div>
      )
    }
  }
  