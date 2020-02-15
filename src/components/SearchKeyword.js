import React from 'react';

const SearchKeyword = props => (
   <>
      <h5 className="">Keyword</h5>
      <div className="card">
         <div className="card-body">
            <div className="form-row">
               <div className='col-7 col-md-8 col-lg-10'>
                  <input className="form-control" type="text"
                     placeholder="Type Keyword i.e: restaurants name, location, cuis"
                     onChange={props.changeKeywordHandler}
                  />
               </div>
               <div className="col">
                  <button className="btn btn-primary" type="button"
                     onClick={props.onClickAddToCriteria}>
                     Add to Criteria
            </button>
               </div>
            </div>
         </div>
      </div>
   </>
)

export default SearchKeyword;