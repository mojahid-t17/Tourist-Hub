import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const spot=useLoaderData();
    return (
        <div className="">
            <div className="container grid grid-cols-12 mx-auto my-5 max-w-5xl gap-6 px-2">
                <div className="card shadow-lg col-span-12  lg:col-span-6 bg-slate-50">
                    <img src={spot.imageUrl} alt="Spot Image" className=" mx-auto h-auto" />
                    <div className="flex flex-col items-center p-6  text-center ">
                      
                        <h1 className="py-4 text-4xl font-bold"> {spot.touristSpotName}</h1>
                        <p className="pb-6">{spot.location},{spot.countryName}</p>
                        
                    </div>
                </div>
                <div className="flex flex-col col-span-12  lg:col-span-6   h-full">
                    <div className="pb-4 space-y-2 h-1/2">
                        
                        
                        <h1 className="text-3xl font-bold">Details</h1>
                        <p>{spot.description}</p>
                        <span className="text-blue-400 ">
                                <hr className="w-2/3 mx-auto my-4" />
                            </span>
                        <div className="space-y-6">
                            <h3 >Avarege Cost: <span className="text-yellow-500">{spot.averageCost}</span> tk</h3>
                            <h3>Seasonality: {spot.seasonality}</h3>
                            <h3>TravelTime: {spot.travelTime}</h3>
                            <h3>Total Visitors Per Year: {spot.totalVisitorsPerYear}</h3>
                        </div>
                        
                    </div>
                 
                </div>
            </div>
        </div>
    )
};

export default SpotDetails;
