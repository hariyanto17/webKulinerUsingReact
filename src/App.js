import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import City from './Pages/City';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/footer/Footer';


class App extends Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/city/:city_id" component={City}></Route>
        <Footer />
      </Router>
    );
  }
}
export default App;
