import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';
import React from 'react'
import './image-slick.css'

function ImageSlickItem (props) {
    if(props.count <= 0 ) return;
    const dataSource = [];
    console.log(" props ", props);
    for(var i =0; i < props.count; i++) {
        let smallImageStr = "smallImage"+i
        console.log("smallImageStr ", smallImageStr);
        let bigImageStr = "bigImage"+i
        dataSource.push({
            small: props[smallImageStr],
            large: props[bigImageStr]
        })
    }
    // const dataSource = [
    //     {
    //         small: props.smallImageOne,
    //         large: props.bigImageOne
    //     },
    //     {
    //         small: props.smallImageTwo,
    //         large: props.bigImageTwo
    //     }
    // ];
    console.log("Data source ", dataSource);
    return (
        <ReactSlick
            {...{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                cssEase:"appear"
            }}
            
        >
            {dataSource.map((src, index) => (
                <div key={index}>
                    {/* <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt:"Not available",
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
                        
                    /> */}
                    <img src = {src.small} className="item-image"/>
                </div>
            ))}
        </ReactSlick>
    );
}

export default ImageSlickItem