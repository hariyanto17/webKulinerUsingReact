import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => (
   < nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top" >
      <div className="container">
         <Link className="navbar-brand" to="/#"> FoodParadise</Link>
      </div>
   </nav>
);

export default Navbar;