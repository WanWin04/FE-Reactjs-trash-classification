import './homePage.css';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer/Footer';
import ToolBar from '../ToolBar/ToolBar';
function HomePage(){
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        customPaging: (i) => {
          console.log(i);
          return (
            <div className={`dot icon${i}`}>
            </div>
          )

        },
        dotsClass: "slick-dots custom-dots",
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
    return (
      <div>
        <ToolBar />

        <div className="homePage-body">
            <div className='fobj'>
                <div style={{ width: "60%", margin: "auto" }}>
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
            <div className='lism'>
              <h2>LỢI ÍCH/SỨ MỆNH</h2>
              <div className='lism zone'>
                <div className='lism but'>
                  <div></div>
                  <h2>Hôm nay là một ngày đẹp trời xxxx xxxx xxxx xxxxxxxx xxxx xxxx </h2>
                  <p>Mới bảo ngày đẹp trời mà mưa sấp mặt</p>
                </div>
                <div className='lism but'>
                  <div></div>
                  <h2>Mang ngay bão Yagi ở đến đây</h2>
                  <p>T ở nhà chứ có ra ngoài đâu mà sợ =))</p>
                </div>
                <div className='lism but'>
                  <div></div>
                  <h2>Buồn ngủ mà deadline dí thấy mịa</h2>
                  <p>Buồn ngủ quá nên đi ngủ hay làm típ đây :v</p>
                </div>
              </div>
            </div>
            <div className='intro-zone'>
              <div className='vide-zone'>
                <div></div>
                <div>
                  <h2>TÍNH NĂNG</h2>
                  <p>Đăng gì đó ở đây.</p>
                </div>
              </div>
              <div className='intro-btn'>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
        </div>
    
        <Footer />
      </div>
    );
}

export default HomePage;