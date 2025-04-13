import { Link } from "react-router-dom";


const TouristSpots = ({spot}) => {
 const name=spot.touristSpotName;
 const id=spot._id;
 const location =spot.location;
    return (
       
      <div className="w-96 sm:w-80 md:w-72 lg:w-[350px] bg-white border border-gray-200 rounded-lg  mx-auto overflow-hidden flex flex-col">
   <div className="overflow-hidden">
   <a href="#">
    <img className="rounded-t-lg z-10 h-72 md:h-80 w-full object-cover transform transition hover:scale-110 duration-500" src={spot.imageUrl} alt="Trip Image" />
  </a>
   </div>
  <div className="p-5 flex flex-col flex-grow">
    <div className="flex-grow">  
      <Link to={`/spotDetails/${id}`}>
        <h5 clLinkssName="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
      </Link>
      <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">{location}</p>
    </div>
   <div className="w-3/5">
   <Link to={`/spotDetails/${id}`} className="inline-flex btn items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        More Details
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>
   </div>
  </div>
</div>

       
    );
};

export default TouristSpots;