import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Import the images
import { Link } from 'react-router-dom';
import bangladesh1 from "/images/bangladesh/bangladesh (1).jpg";
import combodia3 from "/images/combodia/combodia (3).jpg";
import indonesia4 from "/images/indonesia/indonesia (4).jpg";
import japan7 from "/images/japan/japan (7).jpg";
import maldives7 from "/images/maldives/maldives(7).jpg";
import malyasia3 from "/images/malyasia/malyasia (3).jpg";
import thailand1 from "/images/thailand/thailand (1).jpg";
import vietnum6 from "/images/vietnum/vietnum (6).jpg";

const countries = [
  { name: "Bangladesh", image: bangladesh1 },
  { name: "Cambodia", image: combodia3 },
  { name: "Indonesia", image: indonesia4 },
  { name: "Japan", image: japan7 },
  { name: "Maldives", image: maldives7 },
  { name: "Malaysia", image: malyasia3 },
  { name: "Thailand", image: thailand1 },
  { name: "Vietnam", image: vietnum6 },
];

export default function CoverFlow() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleMouseEnter = () => {
    if (swiperInstance) swiperInstance.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperInstance) swiperInstance.autoplay.start();
  };

  return (
    <div className="flex justify-center items-center">
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 40,
          stretch: -40,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        speed={800}  // Controls the slide transition speed (in ms)
        style={{ transitionTimingFunction: 'ease-in-out' }}  // Smooth easing effect
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper w-full h-full"
        onSwiper={setSwiperInstance}
      >
        {countries.map((country) => (
          
        <SwiperSlide
       
          className="max-w-xs mb-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         <Link  to={`/allTouristSpots/${country.name}`}>
         <img
            className="object-cover w-full h-full rounded-lg max-h-98"
            src={country.image}
            alt="Ahsan Manzil"
          />
          <div className="absolute bottom-10 left-0 w-full text-2xl md:text-3xl font-bold text-white   p-4">
                <h2>{country.name}</h2>
                <button></button>
              </div>
         </Link>
        </SwiperSlide>
       
        ))}
      </Swiper>
    </div>
  );
}
