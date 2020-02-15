import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'
import RestaurantProfile from '../components/RestaurantProfile'
import Review from '../components/Review'

class RestaurantDetail extends Component {

   constructor() {
      super()
      this.state = {
         restaurant: null,
         reviews: null
      }
   }

   getReviewsData = (restaurant_id) => {
      let url = `${API.zomato.baseUrl}/reviews`
      axios.get(url, {
         headers: {
            'user-key': API.zomato.api_key
         },
         params: {
            res_id: restaurant_id
         }
      })
         .then(({ data }) => {
            this.setState({ reviews: data.user_reviews })
         })
         .catch(err => console.log(err))
   }

   getRestaurantData = (restaurant_id) => {
      let url = `${API.zomato.baseUrl}/restaurant`
      axios.get(url, {
         headers: {
            'user-key': API.zomato.api_key
         },
         params: {
            res_id: restaurant_id
         }
      })
         .then(({ data }) => {
            this.setState({ restaurant: data })
         })
         .catch(err => console.log(err))
   }

   componentDidMount() {
      let { params } = this.props.match
      this.getRestaurantData(params.restaurant_id)
      this.getReviewsData(params.restaurant_id)
   }
   render() {
      return (
         <>
            <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
               <div className="row">
                  <div className="col-12" style={{ marginBottom: 20 }}>
                     <RestaurantProfile restaurant={this.state.restaurant} />
                  </div>
                  <div className="col-12" style={{ marginBottom: 20 }}>
                     <div className="card">
                        <div className="card-body">
                           <h4 className="text-success" style={{ fontWeight: 800 }}>Reviews</h4>
                           {this.state.reviews ? (
                              this.state.reviews.map(({ review }) => (
                                 <Review review={review} key={review.id} />
                              ))
                           ) : (
                                 <p>Loading...</p>
                              )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      )
   }
}

export default RestaurantDetail