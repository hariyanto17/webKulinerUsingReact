import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

import Footer from './components/footer/Footer';


class App extends Component {

  render() {

    return (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    );
  }
}
export default App;
