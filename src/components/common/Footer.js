import React from 'react'
import './Footer.css'
import fbIcon from '../../assets/img/facebook-app-symbol.svg'
import instaIcon from '../../assets/img/instagram.svg'

function Footer() {
    return <div className="social--footer center">
            <ul className="list--inline">
                                    <li><a href="https://www.facebook.com/Kurinjini/" target="_blank" title="Facebook"><img className="icon-dims" src={fbIcon} alt="Like Kurinjini on Facebook"/></a></li>
                                    <li><a href="https://www.instagram.com/kurinjiniskin/" target="_blank" title="Instagram"><img className="icon-dims" src={instaIcon} alt="Follow Kurinjini on Instagram"/></a></li>
            </ul>
            <p className="small hover-underline copyright-line">© 2019 Kurinjini All Rights Reserved. </p>
            <div style={{fontSize:10}}>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
            
}

export default Footer;