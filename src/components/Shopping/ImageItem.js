import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';
import React from 'react'
import './image-slick.css'

function ImageItem (props) {
    
    return (
                <div>
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Versace',
                                isFluidWidth: true,
                                src: props.smallImageOne
                            },
                            largeImage: {
                                src: props.bigImageOne,
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
            

    );
}

export default ImageItem