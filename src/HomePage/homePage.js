import './homePage.css';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage(){
    const settings = {
        dots: true,
        customPaging: (i) => {
          console.log(i);
          return (
            <div className={`dot icon${i}`}>
            </div>
          )

        },
        dotsClass: "slick-dots custom-dots",
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    console.log(Slider.prototype);
    return (
        <div className="homePage-body">
            <div className='fobj'>
                <div style={{ width: "80%", margin: "auto" }}>
                    <Slider {...settings} >
                        <div id='slide-1'>
                        </div>
                        <div id='slide-2'>
                        </div>
                        <div id='slide-3'>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default HomePage;