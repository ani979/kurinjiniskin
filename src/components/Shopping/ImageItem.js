import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';
import React from 'react'
import './image-slick.css'

function ImageItem (props) {
    const dataSource = [
        {
            small: props.smallImageOne,
            large: props.bigImageOne
        },
        {
            small: props.smallImageTwo,
            large: props.bigImageTwo
        }
    ];
    
    return (
        <ReactSlick
            {...{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }}
            
        >
            {dataSource.map((src, index) => (
                <div key={index}>
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Versace',
                                isFluidWidth: true,
                                src: src.small
                            },
                            largeImage: {
                                src: src.large,
                                width: 1280,
                                height: 854
                            },
                            lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                        }}
                        {...{
                            isHintEnabled: true,
                            shouldHideHintAfterFirstActivation: false,
                            enlargedImagePosition: 'over'
                        }}
                        
                    />
                </div>
            ))}
        </ReactSlick>
    );
}

export default ImageItem