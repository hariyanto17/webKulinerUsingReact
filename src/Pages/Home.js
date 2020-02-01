import React, { Component } from 'react';
import axios from 'axios';
import ImageAndWelcome from '../components/ImageAndWelcome';
import CityList from '../components/CityList';
import SearchCity from '../components/SearchCity';

class Home extends Component {
   constructor() {
      super();
      this.state = {
         keyword: "",
         featuredCities: null
      }
   }

   changeKeywordHandler = (e) => {
      this.setState({
         keyword: e.target.value
      })
   }
   getFeaturedCities = () => {
      var url = "https://developers.zomato.com/api/v2.1/cities"
      axios.get(url, {
         headers: {
            'user_key': '927967790a749abce4a289f68d0a0e7d'
         },
         params: {
            city_ids: "74,11052,170"
         }
      }).then(({ data }) => {
         if (data.status === "success") {
            this.setState({
               featuredCities: data.location_suggestion
            })
         }
      }).catch(err => console.log(err));
   };

   componentDidMount() {
      this.getFeaturedcities();
   }
   render() {
      const citiesDummy =
         [{ id: 72, name: "Jakarta", country_name: "indonesia" },
         { id: 11052, name: "Bandung", country_name: "indonesia" },
         { id: 170, name: "Bali", country_name: "indonesia" }]
      return (
         <>
            <ImageAndWelcome />
            <div className="container text-center" style={{ marginTop: 30, marginBottom: 30 }}>
               <CityList cities={this.state.featuredCities} title={"Feature Cities"} />
               <SearchCity value={this.state.keyword}
                  onChange={this.changeKeywordHandler} />
               <CityList
                  title={"Search Reasault"}
                  cities={citiesDummy} />
            </div>
         </>
      )
   }
}
export default Home