import React, { Component } from 'react';
import './App.css';
import ProductSlick from './components/FirstPage/mainContent/ProductSlick/ProductSlick'
import WhyKurinjini from './components/FirstPage/mainContent/WhyKurinjini'
import MainCarousel from './components/FirstPage/Main-Carousel';
import SellingText from './components/FirstPage/SellingText';


class App extends Component {
  render() {
    return (
      <div>
        
        <div className= "slider-window">
        <MainCarousel></MainCarousel>
        </div>
        <div className = "col-md-12">
        <SellingText></SellingText>
        </div>
        <div className = "col-md-12">
        <ProductSlick></ProductSlick>
        </div>
        <div className = "col-md-12">
        <WhyKurinjini></WhyKurinjini>
        </div>
        
      </div>
    );
  }
}

export default App;
