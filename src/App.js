import React, { Component } from 'react';
import './App.css';
import Footer from './components/FirstPage/Footer'
import ProductSlick from './components/FirstPage/mainContent/ProductSlick'
import Header from './components/FirstPage/Header'
import WhyKurinjini from './components/FirstPage/mainContent/WhyKurinjini'
import MainCarousel from './components/FirstPage/Main-Carousel';
import SellingText from './components/FirstPage/SellingText';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className= "row slider-window">
        <MainCarousel></MainCarousel>
        </div>
        <div className = "row col-md-12">
        <SellingText></SellingText>
        </div>
        <div className = "row col-md-12">
        <ProductSlick></ProductSlick>
        </div>
        <div className = "row col-md-12">
        <WhyKurinjini></WhyKurinjini>
        </div>
        <div className = "row col-md-12">
        <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
