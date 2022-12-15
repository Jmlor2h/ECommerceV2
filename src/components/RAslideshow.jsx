import React from "react";
import "../App.css";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);

let images = [
  {
    imageUrl: `https://i0.wp.com/maytheray.com/wp-content/uploads/2021/06/LITTLE-BLACK-DRESS-OVERSIZED-PLAID-SHIRT.jpg?resize=640%2C800&ssl=1`,
  },
  {
    imageUrl: `https://preview.redd.it/22qsn9mljti81.jpg?width=640&crop=smart&auto=webp&s=5a6cff091c70f6040ae99d1b23de8f67126201bb`,
  },
  {
    imageUrl: `https://i.pinimg.com/736x/16/b6/25/16b625edf5daedaad4fd240e78feea18.jpg`,
  },
  {
    imageUrl: `https://i.pinimg.com/736x/9c/58/04/9c580496af7fb1deb90d2b91bfcd37dc.jpg`,
  },
  {
    imageUrl: `https://i.pinimg.com/736x/5b/f9/b8/5bf9b8c3cce8fc4c9beb119a6ae4a508.jpg`,
  },
];

const Slideshow = () => {
  return (
    <main>
        <div class="slideshowcontainer">
          <Swiper
            className="slideshowcontainer"
            // install Swiper modules
            centeredSlides={true}
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            speed={2500}
            navigation={true}
            autoplay={{delay:4000,
            disableOnInteraction:false}}
          >
            {images.map(({ imageUrl }, index) => {
              return (
                <SwiperSlide key={index} className="imagecontainer">
                  <div class="imagecontainer">
                    <img class="slideimage" id="img1" src={imageUrl} alt="slideImg1" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
    </main>
  );
};

export default Slideshow;
