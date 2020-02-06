import React, { Component } from 'react';
import axios from 'axios';
import { API } from '../config/api';

const categoriesDummy = [
   {
      "categories": {
         "id": 1,
         "name": "Delivery"
      }
   },
   {
      "categories": {
         "id": 2,
         "name": "Dine-out"
      }
   },
   {
      "categories": {
         "id": 3,
         "name": "Nightlife"
      }
   },
   {
      "categories": {
         "id": 4,
         "name": "Catching-up"
      }
   }
];

class City extends Component {
   constructor() {
      super();
      this.state = {
         city: null,
         categories: null
      };
   }

   transformCategoriesData = categories => {
      let categoriesTransformed = categories.map(category => {
         return category.categories;
      })
      return categoriesTransformed;
   }

   getCityData = (city_id) => {
      const url = `${API.zomato.baseUrl}/cities`
      const user_key = API.zomato.api_key
      axios.get(url, {
         headers: { 'user-key': user_key },
         params: { city_ids: city_id }
      }).then(({ data }) => {
         if (data.status === "success") {
            this.setState({ city: data.location_suggestions[0] })
         }
      }).catch(err => console.log(err));
   }

   componentDidMount() {
      const city_id = this.props.match.params.city_id;
      this.getCityData(city_id)

      let categories = this.transformCategoriesData(categoriesDummy);
      this.setState({ categories })
   }
   render() {
      return (
         <div className="container-fluid" style={{ marginTop: 30, marginBottom: 30 }}>
            {this.state.city && (
               <div className="row">
                  <div className="col">
                     <h4 className="text-success text-center"> Restaurant in {this.state.city.name}, {this.state.city.country_name} </h4>
                  </div>
               </div>
            )}
            <div className="row">
               <div className="col-3">
                  <h5 className="text-center">Categories</h5>
                  {this.state.categories && (
                     <div className="list-group">
                        {this.state.categories.map(category => (
                           <button key={category.id}
                              className={"list-group-item list-group-item-action"}>
                              {category.name}
                           </button>
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </div>
      )
   }
}

export default City;