import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import images
import slider1 from "../assets/images/slider/slider1.jpg";


import slider3 from "../assets/images/slider/slider3.jpg";
import slider4 from "../assets/images/slider/slider4.jpg";
import slider6 from "../assets/images/slider/slider6.jpg";

export default function Slider() {
  return (
    <div className="relative">
      <div className="flex flex-col mx-auto overflow-hidden rounded relative">
        {/* Swiper Slider */}
        <Swiper
          effect={"fade"}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="w-full h-60 sm:h-96 rounded-t z-10"
        >
          <SwiperSlide>
            <img
              src={slider1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
         
          <SwiperSlide>
            <img
              src={slider3}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider4}
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider6}
              alt="Slide 6"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
       
          
        </Swiper>

        {/* Text Section (Centered Over the Slider) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/3 -translate-y-1/2 w-full max-w-sm md:max-w-2xl p-6 sm:px-10   rounded-md text-center  z-20">
          <div className="space-y-2">
            <a
              href="#"
              className="inline-block text-3xl font-bold sm:text-2xl md:text-5xl text-white "
            >
              The Best trip of your dreams starts
            </a>
            <p className="text- text-white">
              with{" "}
              <a href="#" className="hover:underline font-bold text-orange-300">
                Tourist Hub
              </a>
            </p>
          </div>
          <div className="text-gray-700 bg-[rgba(203,213,225,0.3)] p-4 md:w-full ">
            <div className="bg-slate-50 opacity-80 flex items-center p-2 w-full space-x-2">
              <div className="w-1/3">
                <input
                  type="text"
                  placeholder="Destination"
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="w-2/3">
                <a href="" className="btn btn-primary  w-full ">
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
