import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import TouristSpots from "../Components/TouristSpots";


const AllSpots = () => {
    const { countryName } = useParams();
    
    
    const [selectedCountry, setSelectedCountry] = useState(countryName);
    
    const touristSpots=useLoaderData();



    // Get unique country names
    const countries = ["All", ...new Set(touristSpots.map((spot) => spot.countryName))];

    // Filter spots based on selected country
    const filteredSpots =
        selectedCountry === "All"
            ? touristSpots
            : touristSpots.filter((spot) => spot.countryName === selectedCountry);
    return (
        <div className="max-w-6xl mx-auto my-8">
             <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-blue-600">Explore Beautiful Tourist Spots</h1>
                <p className="text-gray-600 mt-2">
                    Discover amazing destinations around the world. Filter by category to find the best spot for your next adventure!
                </p>
            </div>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
                {countries.map((country) => (
                    <Link
                        key={country}
                        className={`px-4 py-2 rounded-lg ${
                            selectedCountry === country ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                        onClick={() => setSelectedCountry(country)}
                    >
                        {country}
                    </Link>
                ))}
            </div>

              <div className="grid md:grid-cols-3 sm:grid-cols-2  lg:gap-4 gap-6 lg:mx-8 md:mx-2">
           {
            filteredSpots.map(spot=><TouristSpots spot={spot}></TouristSpots>)
           }
               
          </div>
        </div>
    );
};

export default AllSpots;