import React, { Component } from 'react';
import './App.css';
import Footer from './components/FirstPage/Footer'
import ProductSlick from './components/FirstPage/mainContent/ProductSlick/ProductSlick'
import Header from './components/header/Header'
import WhyKurinjini from './components/FirstPage/mainContent/WhyKurinjini'
import MainCarousel from './components/FirstPage/Main-Carousel';
import SellingText from './components/FirstPage/SellingText';
import TopBar from './components/FirstPage/TopBar';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <Header></Header>
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
        <div className = "col-md-12">
        <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
