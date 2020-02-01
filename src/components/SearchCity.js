import React from 'react';
import CityCard from './CityCard.js';

const SearchCity = (props) => (
   <>
      <div className="row" style={{ marginBottom: 30 }}>
         <div className="col">
            <h3>Search</h3>
            <div className="card">
               <div className="card-body">
                  <div className="form-row">
                     <div className="col-11">
                        <input className="form-control"
                           type="text"
                           placeholder="Type Keyword or city name"
                           value={props.value}
                           onChange={props.onChange}
                        />
                     </div>
                     <div className="col-1">
                        <button className=" btn btn-success" type="button">
                           Search
                    </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>
)
export default SearchCity;