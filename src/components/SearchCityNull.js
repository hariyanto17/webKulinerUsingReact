import React from 'react';

const SearchCityNull = (props) => (
   <>
      <div className="row">
         <div className="col-12">
            <h3>{props.title}</h3>
            {props.showsubtitle === true && props.subtitle !== '' &&
               <h6 className="text-danger">Search Resault for Keyword '{props.subtitle}' NOT FOUNT </h6>}
         </div>
      </div>
   </>
)
export default SearchCityNull;