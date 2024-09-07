import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider(...images) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const innerText = ()=>{
    let inner = Object.values(images[0]).map((Element) =>{
        return `<div src = ${Element}></div>`;
    }).join('');
    return (inner);
  }
  console.log(innerText())
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings} >
        <innerText/>
      </Slider>
    </div>
  );
};

export default ImageSlider;
