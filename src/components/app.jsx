import React, {Component, Children} from 'react';
import { withTranslate } from 'react-redux-multilingual'
// import { ToastContainer } from 'react-toastify';

import HeaderOne from './common/header/Header';
import FooterOne from "./common/Footer";
import TopBar from './common/TopBar';


const App = ({children }) => {
        return (
            <div>
                <TopBar></TopBar>
                <HeaderOne />
                {children}
                <FooterOne/>
                {/* <ToastContainer /> */} 
            </div>
        )
}

export default withTranslate(App);
