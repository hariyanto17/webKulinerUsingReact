import React from 'react'

const SearchCriteria = (props) => (

   <div className="card bg-light mb-3" style={{ marginTop: 20 }}>
      <div className="card-body">
         <p className="card-title">Find Restaurants based on criteria : </p>
         <table className="table table-hover">
            <tbody>
               {props.criteria.map((cri, index) => (
                  <tr key={index} className="table-active">
                     <td width="40%">{cri.criteriaName}</td>
                     <td width="50%">{cri.data.name}</td>
                     <td>
                        {cri.criteriaName !== 'City' && (
                           <button className="btn"><i
                              className="fa fa-times"
                              aria-hidden="true"
                              style={{ color: 'red' }}
                              onClick={() => props.removeCriteriaHandler(index, cri.criteriaName)}
                           >
                           </i></button>
                        )}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <div className="pull-right">
            <button
               className="btn btn-primary"
               type="button"
               onClick={props.onClickSearch}
            >
               Search
         </button>
         </div>

      </div>
   </div>
)

export default SearchCriteria