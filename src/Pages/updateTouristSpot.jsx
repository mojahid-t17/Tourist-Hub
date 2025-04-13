import React from 'react';

const updateTouristSpot = () => {
    return (
        <section className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg my-5">
            <form noValidate action="" className="space-y-6">
                <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-md">
                    <div className="col-span-full text-center">
                        <h2 className="text-2xl  font-bold">Add Tourist Spot</h2>
                        <p className="text-sm text-gray-600">Fill in the details of the tourist spot you want to add.</p>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="image" className="block text-sm font-medium">Image URL</label>
                        <input id="image" type="text" placeholder="Enter image URL" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                    <div>
                        <label htmlFor="tourists_spot_name" className="block text-sm font-medium">Tourist Spot Name</label>
                        <input id="tourists_spot_name" type="text" placeholder="Enter spot name" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                    <div>
                        <label htmlFor="country_Name" className="block text-sm font-medium">Country Name</label>
                        <input id="country_Name" type="text" placeholder="Enter country" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="location" className="block text-sm font-medium">Location</label>
                        <input id="location" type="text" placeholder="Enter location details" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium">Short Description</label>
                        <textarea id="description" placeholder="Enter a short description" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"></textarea>
                    </div>
                    <div>
                        <label htmlFor="average_cost" className="block text-sm font-medium">Average Cost</label>
                        <input id="average_cost" type="number" placeholder="Enter cost" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                    <div>
                        <label htmlFor="seasonality" className="block text-sm font-medium">Seasonality</label>
                        <input id="seasonality" type="text" placeholder="E.g., Summer, Winter" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                    <div>
                        <label htmlFor="travel_time" className="block text-sm font-medium">Travel Time</label>
                        <input id="travel_time" type="text" placeholder="E.g., 7 days" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                    <div>
                        <label htmlFor="totalVisitorsPerYear" className="block text-sm font-medium">Total Visitors Per Year</label>
                        <input id="totalVisitorsPerYear" type="number" placeholder="E.g., 10000" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                    <div>
                        <label htmlFor="userEmail" className="block text-sm font-medium">User Email</label>
                        <input id="userEmail" type="email" placeholder="Enter your email" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                    <div>
                        <label htmlFor="userName" className="block text-sm font-medium">User Name</label>
                        <input id="userName" type="text" placeholder="Enter your name" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" />
                    </div>
                </fieldset>
                <div className="flex justify-end">
                    <button type="submit" className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Add Tourist Spot
                    </button>
                </div>
            </form>
        </section>
    );
};

export default updateTouristSpot;