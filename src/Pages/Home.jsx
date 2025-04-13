import Aos from "aos";
import "aos/dist/aos.css";
import CoverFlow from "../Components/CoverFlow";
import Slider from "../Components/slider";
// Import Swiper React components

// import required modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TouristSpots from "../Components/TouristSpots";

const Home = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch('https://touris-hub-server.vercel.app/touristSpots')
      .then(res => res.json())
      .then(data => {
        const displaySpots = data.slice(0, 6);
        setTouristSpots(displaySpots); 
      })
      .catch(error => console.error('Error fetching data:', error));
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
              <h1 className="md:text-5xl text-3xl font-bold">About </h1>
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
            <div className="grid grid-cols-2 gap-8 p-8">
              <div
                className="h-32 w-full rounded text-center bg-indigo-50 flex flex-col items-center justify-center "
                data-aos="zoom-in-down"
              >
                <h2 className="text-3xl font-bold">343</h2>
                <p className="text-xl text-gray-500">Trips Done</p>
              </div>

              <div
                className="h-32 w-full rounded text-center bg-amber-50 flex flex-col items-center justify-center"
                data-aos="zoom-in-down"
              >
                <h2 className="text-3xl font-bold">563</h2>
                <p className="text-xl text-gray-500">Corporate Clients</p>
              </div>

              <div
                className="h-32 w-full rounded text-center bg-cyan-50 flex flex-col items-center justify-center"
                data-aos="zoom-in-up"
              >
                <h2 className="text-3xl font-bold">423</h2>
                <p className="text-xl text-gray-500">Visited Countries</p>
              </div>

              <div
                className="h-32 w-full rounded text-center bg-fuchsia-50 flex flex-col items-center justify-center"
                data-aos="zoom-in-up"
              >
                <h2 className="text-3xl font-bold">15</h2>
                <p className="text-xl text-gray-500">Team Members</p>
              </div>
            </div>
          </div>
        </section>

        {/****************** most popular desitination******************* */}
        <section className="max-w-6xl px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h1 className="md:text-5xl text-3xl font-bold my-4">
              Most Popular Destinations
            </h1>
            <p className="text-xl">
              Expand your travel experience and discover exciting new
              destinations! Whether you're drawn to Asia, Europe, America,
              Australia, or beyond, ShareTrip helps you find the perfect places
              to explore and create lasting memories.
            </p>
          </div>
          <CoverFlow></CoverFlow>
          <div className="text-center">
            <Link to="/allTouristSpots/All">
            <button className="btn btn-outline btn-primary">Explore All</button>
            </Link>
           
          </div>
        </section>

        {/* Tourist spots section */}
        <section className="mx-auto max-w-6xl">
          <div>
            <h1 className="text-center font-bold text-4xl my-5 md:my-8">
              Tourist Sposts
            </h1>
            <p className="text-center max-w-5xl mx-auto mb-4 text-gray-700">
              Discover breathtaking destinations and must-visit attractions
              across the globe! Whether you seek serene beaches, historical
              landmarks, or thrilling adventures, we have curated the best spots
              for you. Tap to explore more and plan your next unforgettable
              journey!
            </p>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-4 ">
           {
            touristSpots.map(spot=><TouristSpots spot={spot}></TouristSpots>)
           }
               
          </div>
          <div className="text-center mt-3">
           <Link to="/allTouristSpots/All">
           <button className="btn btn-outline btn-primary">See All</button>
           </Link>
          </div>
        </section>

        {/* Trip gellery section */}
        <section className="mx-4 my-6">
          <div>
            <h1 className="text-center font-bold text-4xl my-5 md:my-8">
              {" "}
              Trip Gellery
            </h1>
            <p className="text-center max-w-5xl mx-auto mb-4 text-gray-700">
              {" "}
              Explore our stunning collection of travel moments captured from
              breathtaking destinations around the world. From serene beaches
              and vibrant cityscapes to adventurous mountain treks and cultural
              landmarks, each photo tells a story of unforgettable experiences.
              Let these snapshots inspire your next journey!
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 grid-rows-4 md:grid-rows-3 gap-4 h-[600px]">
            {/* First Image (Taller - 3 rows) */}
            <div className="col-span-1 row-span-3 overflow-hidden">
              <img
                className="h-full md:w-full object-cover rounded-tl-4xl rounded-br-3xl transform transition hover:scale-110 duration-500"
                src="/images/photo/trip (5).jpg"
                alt="Vietnam Spot 1"
              />
            </div>

            {/* Second Image (Taller - 2 rows) */}
            <div className="col-span-1 row-span-2 overflow-hidden">
              <img
                className="md:h-full h-72 w-full object-cover rounded-tl-4xl rounded-br-3xl transform transition hover:scale-110 duration-500"
                src="/images/photo/trip (1).jpg"
                alt="Vietnam Spot 2"
              />
            </div>

            {/* Third Image (Single Row) */}
            <div className="col-span-1 row-span-1 overflow-hidden">
              <img
                className="md:h-48 h-32 w-full object-cover rounded-tl-4xl rounded-br-3xl transform transition hover:scale-110 duration-500"
                src="/images/photo/trip (8).jpg"
                alt="Vietnam Spot 3"
              />
            </div>

            {/* Fourth Image (Taller - 2 rows) */}
            <div className="col-span-1 row-span-2 overflow-hidden">
              <img
                className="h-40 md:h-full w-full object-cover rounded-tl-4xl rounded-br-3xl transform transition hover:scale-110 duration-500"
                src="/images/photo/trip (7).jpg"
                alt="Vietnam Spot 4"
              />
             
            </div>

            {/* Fifth Image (Single Row) */}
            <div className="col-span-1 row-span-1 overflow-hidden">
              <img
                className="h-48 md:w-full object-cover rounded-tl-4xl rounded-br-3xl transform transition hover:scale-110 duration-500"
                src="/images/photo/trip (3).jpg"
                alt="Vietnam Spot 5"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
