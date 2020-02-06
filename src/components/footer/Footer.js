import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => (
   <footer className="my-footer">
      <div className="text-center">
         <div className="container">
            <div className="row">
               <div className="col-sm-4 text-center">
                  <h5>About FoodParadise</h5>
                  <ul>
                     <li><Link to="/#">About Us</Link></li>
                     <li><Link to="/#">Contact Us</Link></li>
                  </ul>
               </div>
               <div className="col-sm-4 text-center">
                  <h5>Support</h5>
                  <ul>
                     <li><Link to="/#">FAQ</Link></li>
                     <li><Link to="/#">Help desk</Link></li>
                     <li><Link to="/#">Forums</Link></li>
                  </ul>
               </div>
               <div className="col-sm-4 text-center">
                  <h5>Download App</h5>
                  <ul>
                     <li><Link to="/#">Google Play</Link></li>
                     <li><Link to="/#">App Store</Link></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="social-networks">
            <Link to="/#" className="twitter"><i className="fa fa-twitter"></i></Link>
            <Link to="/#" className="facebook"><i className="fa fa-facebook"></i></Link>
            <Link to="/#" className="instagram"><i className="fa fa-instagram"></i></Link>
            <Link to="/#" className="google"><i className="fa fa-google"></i></Link>
         </div>
         <p className="footer-copyright">Copyright &copy; 2020 Hariyanto </p>
      </div>
   </footer>
)

export default Footer;