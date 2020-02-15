import React from 'react'
import RatingLabel from './RatingLabel'

const RestaurantProfile = (props) => (
   <div className="container">
      <div className="card">
         <div className="card-header">
            <div className="row">
               <div className="col">
                  {props.restaurant ? (
                     <>
                        <h4 className="text-success" style={{ fontWeight: 800 }}>{props.restaurant.name}</h4>
                        <h6 style={{ fontWeight: 600 }}>{props.restaurant.location.locality}</h6>
                        <h6 className="text-muted">{props.restaurant.location.address}</h6>
                     </>
                  ) : (
                        <div>  <p> Loading . . . . . </p></div>
                     )}
               </div>
            </div>
         </div>
         <div className="card-body">
            <div className="row d-flex justify-content-between">
               <div className="col-5">
                  {props.restaurant ? (
                     <img className="img-responsive" src={props.restaurant.featured_image} alt="" style={{ borderRadius: 5, width: 500 }} ></img>
                  ) : (
                        <div>  <p> Loading . . . . . </p> </div>
                     )}
               </div>
               <div className="col-4">
                  {props.restaurant ? (
                     <>
                        <div className="row">
                           <div className="col-6">
                              <p> Rating </p>
                           </div>
                           <div className="col">
                              <RatingLabel
                                 labelColor={props.restaurant.user_rating.rating_color}
                                 text={`${props.restaurant.user_rating.aggregate_rating} (${props.restaurant.user_rating.rating_text})`}
                              />
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-6">
                              <p>Cuisines</p>
                           </div>
                           <div className="col">
                              <p>{props.restaurant.cuisines}</p>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col">
                              {props.restaurant.currency + ' ' + props.restaurant.average_cost_for_two}

                           </div>
                        </div>
                     </>
                  ) : (

                        <div>Loading . . . . .</div>

                     )}
               </div>
            </div>

         </div>
      </div>
   </div>
)

export default RestaurantProfile