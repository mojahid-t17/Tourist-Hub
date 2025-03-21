import Aos from "aos";
import "aos/dist/aos.css";
import CoverFlow from "../Components/CoverFlow";
import Slider from "../Components/slider";
// Import Swiper React components




// import required modules
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="">
        <Slider></Slider>
        {/* explore wiht us section */}

        <section className="py-6 " data-aos="fade-up">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
              Explore With Us
            </h1>

            <div className="flex flex-row flex-wrap-reverse justify-center">
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4"
                  src="/images/icons/airplane.png"
                />
                <p className="text-xl font-semibold leading-tight">
                  Travel Planning
                </p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 "
                  src="/images/icons/accommodation.png"
                />
                <p className="text-xl font-semibold leading-tight">
                  Hotels & Stays
                </p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 "
                  src="/images/icons/icon3.png"
                />
                <p className="text-xl font-semibold leading-tight">
                  Destinations & Attractions
                </p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 "
                  src="/images/icons/adventurer.png"
                />
                <p className="text-xl font-semibold leading-tight">Adventure</p>
              </div>
              <div className="flex flex-col justify-center m-8 text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 "
                  src="/images/icons/cooking.png"
                />
                <p className="text-xl font-semibold leading-tight">
                  Food & Culture
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* about us section */}
        <section className="flex flex-col-reverse md:flex-row space-x-4 ">
          <div
            className="md:w-1/2 md:mx-0 mx-3 mt-3 overflow-hidden "
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <img
              className="md:rounded-tr-[250px] h-full rounded-br-4xl rounded-tr-4xl pb-8
                 transform transition duration-500 hover:scale-105"
              src="/images/photo/tour2.jpg"
              alt="Tour Image"
            />
          </div>
          <div className="md:w-1/2 mx-4">
            <div className="ms-8 mb-10">
              <h1 className="md:text-5xl text-3xl font-bold">About Us</h1>
              <h2 className="text-2xl md:text-4xl my-3">
                Explore the World with{" "}
                <span className="font-Lobster text-amber-400">Tourist Hub</span>
              </h2>
              <p>
                We are passionate about bringing your travel dreams to life,
                whether you seek breathtaking landscapes, cultural wonders,
                thrilling adventures, or relaxing getaways. Our mission is to
                make travel seamless, exciting, and personalized for every
                explorer.
              </p>
              <div>
                <button className="btn mt-3 bg-blue-400 hover:bg-blue-700 text-white">
                  Explore More
                </button>
              </div>
            </div>
            {/* analytic subsection */}
            <div className="grid grid-cols-2 gap-8 p-8" >
              
              <div className="h-32 w-full rounded text-center bg-indigo-50 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold">343</h2>
                <p className="text-xl text-gray-500">Trips Done</p>
              </div>

              <div className="h-32 w-full rounded text-center bg-amber-50 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold">563</h2>
                <p className="text-xl text-gray-500">Corporate Clients</p>
              </div>

              <div className="h-32 w-full rounded text-center bg-cyan-50 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold">423</h2>
                <p className="text-xl text-gray-500">Visited Countries</p>
              </div>

              <div className="h-32 w-full rounded text-center bg-fuchsia-50 flex flex-col items-center justify-center" >
                <h2 className="text-3xl font-bold">15</h2>
                <p className="text-xl text-gray-500">Team Members</p>
              </div>
            </div>
          </div>
        </section>


         {/* most popular desitination */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-6">
          <h1 className="md:text-5xl text-3xl font-bold my-4">Most Popular Destinations</h1>
          <p className="text-xl">Expand your travel experience and discover exciting new destinations! Whether you're drawn to Asia, Europe, America, Australia, or beyond, ShareTrip helps you find the perfect places to explore and create lasting memories.</p>
          </div>
        <CoverFlow></CoverFlow>
        <div className="text-center">
        <button className="btn btn-outline btn-primary">Explore All</button>
        </div>
        </section>
   
    </div>
      </div>
  
  );
};

export default Home;
