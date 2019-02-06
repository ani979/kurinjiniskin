import React from 'react'
import styled, { css } from 'styled-components'
import './Main-Carousel.css'

function BlurredImage(props) {
    const BlurredImg = styled.img`
        filter: blur(6px);
        transition: opacity 0.2s ease-in;
        height:auto;
        width:100%;
        height:auto;
    `;
    console.log(" props.shouldBeVisible ", props.shouldBeVisible + " props.imageUrl " + props.imageUrl);
    return (
        <BlurredImg src={props.imageUrl} />
    );
}

export default BlurredImage