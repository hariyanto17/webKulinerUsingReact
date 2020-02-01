import React from 'react';
import mainImage from '../assets/image/makanan.jpg';

const ImageAndWelcome = (props) => (
   <>
      <div className="row" style={{ marginBottom: 30 }}>
         <img src={mainImage} width="100%" alt="Aneka Makanan"></img>
      </div>
      <div className="row">
         <div className="col">
            <div className="card text-white bg-success mb-3 text-center">
               <div className="card-header">
                  <h1>Welcome To FoodParadise</h1>
               </div>
               <div className="card-body">
                  <h4 className="card-title">the easiest way to find Restaurants and Food</h4>
                  <p className="card-text">You can grab informastion about restaurants, cafees,cuisine with jush a few click. </p>
                  <p className="card-text">Start by choosing the featured cities bellow, or search the city name.</p>
               </div>
            </div>
         </div>
      </div>
   </>
);

export default ImageAndWelcome;