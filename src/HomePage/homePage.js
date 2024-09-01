import './homePage.css';
import Slider from "react-slick";
import React from 'react';
function homePage(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className="homePage-body">
            <div className='fobj'>
                <div className='slider-container'>
                    <Slider {...settings}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default homePage;