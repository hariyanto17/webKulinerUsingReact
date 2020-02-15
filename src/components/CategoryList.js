import React from 'react';

const CategoryList = props =>
   props.categories ? (
      <div className="list-group">
         {props.categories.map(category => (
            <button key={category.id}
               className={"list-group-item list-group-item-action"
                  + (props.categorySelected &&
                     props.categorySelected.id === category.id ?
                     "active bg-dark text-white" : '')}
               onClick={() => props.categoryClickHandler(category)}>
               {category.name}
            </button>
         ))}
      </div>
   ) : (
         <p>Loading . . . .</p>
      );

export default CategoryList;