import React from 'react'
import styled from "styled-components";
import { SideNav, Nav as BaseNav } from "react-sidenav";
import './aboutus.css'
import '../FAQPage/FAQ.css'
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as BaseNavigation,
  ExampleBody as Body
} from "./Containers";
import { Icon as BaseIcon } from "react-icons-kit";
import Card from './Card'
import sample from '../../assets/img/FaceCare/MoisturizingCreams/orange_big.jpg'
import animeshPic from '../../assets/img/AboutUs/animesh.jpg'
import shilpi from '../../assets/img/AboutUs/Shilpi_4.jpg'

const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 40px);
`;

const Navigation = styled(BaseNavigation)`
  background: #303641;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 100px;
  line-height: 22px;
  margin: 20px;
`;

const IconCnt = styled.div`
  color: #FFF;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;

const Nav = styled(BaseNav)`
  flex-direction: column;
`;

const theme = {
  selectionColor: "#FFF",
  hoverBgColor: "#181b20",
  selectionBgColor: "#00BCD4"
};

const Text = styled.div`
  font-size: 0.42em;
  text-transform: uppercase;
`;

const Icon = props => <BaseIcon size={32} icon={props.icon} />;

class AboutUs extends React.Component {
    state = { selectedPath: "1" };

    onItemSelection = arg => {
      this.setState({ selectedPath: arg.path });
    };
  
    render() {
      return (
        <div>

            <div className="panel" id="mission-and-vision">
                <div className="center-column aboutus-content">
                    <div>
                        <h1><span className="subheader">Mission &amp; Vision&nbsp;</span></h1>
                    </div>
                    <div className = "answer-style">
                        <blockquote>
                            <p className = "block-para">In a world where synthetic cosmetics has led us down a blind path, where skin care choices are made without knowing what harm chemicals can do to our skin, we are here to bring a change, slowly and steadily. </p>
                        </blockquote>
                        <p>By bringing nature's healing to you, we have devoted ourselves to a dream, a vision, a mission. We will revolutionize the way we care! And in so doing we will bring nourishment and balance, health and well being, sustainability and community to people and planet.</p>
                        <p>Hippocrates the father of medicine, said that 'the way to health is to have an aromatic bath and scented massage every day'. There are about three hundred essential oils in general use today and each having a distinct aroma of its own. The most effective way to use essential oils is not orally , as one might think, but by external application or inhalation. This is where we come in, bringing these aromas closer to you.</p>
                        <p>We need to take small steps so that change doesnt come heavy on you. We don't want you to change your skin routine overnight but we definitely would like you to start trying slowly the nature's gift and see for yourself what it does to you. </p>
                        <p>Everyone is beautiful and your care doesn’t have to be a choice between the lesser of evils. So let's work together to bring about a beautiful change, a change for a better care and love.</p>
                        <p>Together, we can change the world.</p>
                    </div>        
                </div>
            </div>
            <div class="panel panel-cards">
                
                <div class="cards cards--wrap content-wrapper--large add-pad">
                    <Card title = "Research" excerpt = "Consistent improvement through regular and continuous research on nature's gitfs."></Card>
                    <Card title = "Home Made" excerpt = "Our products are home made without compromising on purity and quality."></Card>
                    <Card title = "Beauty and health" excerpt = "Beauty and health go together in our products."></Card>
                    <Card title = "Customer service" excerpt = "Serving you is our greatest wealth."></Card>
                </div>
            </div>
            <div className="panel" id="the-team">
                <div>
                    <div style = {{textAlign:"center"}}>
                        <h1><span className="subheader">The &amp; Team&nbsp;</span></h1>
                    </div>
                    <div className = "row col-md-12 col-sm-12 col-lg-12">
                        <div className = "col-md-4 col-sm-4 col-lg-4">
                            <img className= "img-team" src = {shilpi}/>
                        </div>
                        <div className = "col-md-4 col-sm-4 col-lg-8">
                            <div className = "answer-style">
                                <p> Shilpi is the `Walter White` of Kurinjini. She is the brain behind Kurinjini Skin Care. A graduate from Delhi University, she did her post graduation in History from Jawaharalal Nehru University and proceeded to Bangalore after her marraige.
                                    In Bengaluru, she completed her PhD in History under ICHR(Indian Council of Historical Research) funding. Even before starting with Kurinjini, she always had that liking towards making handmade soaps but she kept it to herself and used her skills for gifting to her friends. 
                                    She got an opportunity to take it fulltime after getting her Doctorate degree. Now she deovtes her full time into researching on essential oils and their benefits. She is even a wonderful baker and a gardener. When she is not working, you can see her gardening or baking some fantastic breads for her household. 
                                    She intends to continue Kurinjini as a home made brand rather than a factory-made brand.
                                </p>
                            </div>
                        </div>
                    </div>  
                    <div className = "row col-md-12 col-sm-12 col-lg-12">
                        <div className = "col-md-4 col-sm-4 col-lg-4">
                            <img className= "img-team" src = {animeshPic}/>
                        </div>
                        <div className = "col-md-8 col-sm-8 col-lg-8">
                            <div className = "answer-style">
                                <p> If Shilpi is Walter White of Kurinjini, you can guess what Animesh is! Got married to Shilpi in 2008, he has been there with her in all her endeavors. Animesh does most of the backend work for Kurinjini. He is involved into daily operations and deliveries. He is a full-time software engineer at a start-up in Bangalore. His responsibility in Kurinjini includes managing website development, photography and video shoots, preparing promotional content on whatsapp and other social media, and managing Kurinjini's deliveries. 
                                    He strongly believes that customer service is key to any successful business and hence at Kurinjini he ensures that every query is responded quickly and every order is delivered on time to every customer. 
                                </p>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        </div>    
      );
    }
}

export default AboutUs