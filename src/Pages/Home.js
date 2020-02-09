import React, { Component } from 'react';
import axios from 'axios';
import ImageAndWelcome from '../components/ImageAndWelcome';
import CityList from '../components/CityList';
import SearchCity from '../components/SearchCity';
import SearchCityNull from '../components/SearchCityNull';
import { API } from '../config/api';

class Home extends Component {
   constructor() {
      super();
      this.state = {
         keyword: "",
         featuredCities: null,
         citiesResultSearch: null,
         cityKeywordSearch: "",
         searchResaultNull: false,
         buttonSearchOnPress: false
      }
   }

   changeKeywordHandler = (e) => {
      this.setState({ keyword: e.target.value })
   }
   searchHandler = () => {
      this.setState({ buttonSearchOnPress: true })
      let keyword = this.state.keyword;
      const url = `${API.zomato.baseUrl}/cities`
      const user_key = API.zomato.api_key
      axios.get(url, {
         headers: { 'user-key': user_key },
         params: { q: keyword }
      }).then(({ data }) => {
         if (data.status === "success") {
            if (data.location_suggestions.length !== 0) {
               this.setState({
                  citiesResultSearch: data.location_suggestions,
                  keyword: "",
                  cityKeywordSearch: keyword,
                  searchResaultNull: false,
               });
            } else {
               this.setState({
                  keyword: "",
                  cityKeywordSearch: keyword,
                  searchResaultNull: true,
               });
            }
            console.log(this.state.searchResaultNull)
         }
      }).catch(err => console.log(err));
   }

   getFeaturecities = () => {
      const url = `${API.zomato.baseUrl}/cities`
      const user_key = API.zomato.api_key
      axios.get(url, {
         headers: { 'user-key': user_key },
         params: { city_ids: "74,11052,170" }
      }).then(({ data }) => {
         if (data.status === "success") {
            this.setState({ featuredCities: data.location_suggestions })
         }
      }).catch(err => console.log(err));
   };

   componentDidMount() {
      this.getFeaturecities()
   }


   render() {
      return (
         <>
            <ImageAndWelcome />
            <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>

               <CityList cities={this.state.featuredCities}
                  title={"Feature Cities"} />

               <SearchCity value={this.state.keyword}
                  onChange={this.changeKeywordHandler}
                  onClickSearch={this.searchHandler} />

               {this.state.buttonSearchOnPress === true ? (
                  this.state.searchResaultNull === false ? (
                     <CityList cities={this.state.citiesResultSearch}
                        title={"Search Resault"}
                        showsubtitle={true}
                        subtitle={this.state.cityKeywordSearch} />
                  ) : (
                        <SearchCityNull
                           title={"Search Resault"}
                           showsubtitle={true}
                           subtitle={this.state.cityKeywordSearch} />
                     )
               ) : null}
            </div>
         </>
      )
   }
}
export default Home