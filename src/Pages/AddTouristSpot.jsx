import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
const AddTouristSpot = () => {
    const {user}=useContext(AuthContext);
    
    const handleAddSpot = e => {
        e.preventDefault();
        const form = e.target;
        const imageUrl = form.imageUrl.value;
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const userEmail = user.email;
        const userName=user.displayName;
        
        
        const touristSpot = {
            imageUrl,
            touristSpotName,
            countryName,
            location,
            description,
            averageCost,
            seasonality,
            travelTime,
            totalVisitorsPerYear,
            userEmail,
            userName
        };
        fetch('https://touris-hub-server.vercel.app',{
            method: 'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(touristSpot)

        })
        .then(res=>res.json())
       .then(data=>{
       
        console.log(data)
        Swal.fire({
            title: "Good job!",
            text: "You Data inserted succesfully...!",
            icon: "success"
          });
          form.reset();
    })
        
        // console.log(touristSpot);
    };
    
    return (
        <section className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg my-5">
        <form onSubmit={handleAddSpot} className="space-y-6">
            <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-md">
                <div className="col-span-full text-center">
                    <h2 className="text-2xl font-bold">Add Tourist Spot</h2>
                    <p className="text-sm text-gray-600">Fill in the details of the tourist spot you want to add.</p>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="imageUrl" className="block text-sm font-medium">Image URL</label>
                    <input name="imageUrl" id="imageUrl" type="text" placeholder="Enter image URL" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required />
                </div>
                <div>
                    <label htmlFor="touristSpotName" className="block text-sm font-medium">Tourist Spot Name</label>
                    <input name="touristSpotName" id="touristSpotName" type="text" placeholder="Enter spot name" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required />
                </div>
                <div>
                    <label htmlFor="countryName" className="block text-sm font-medium">Country Name</label>
                    <input name="countryName" id="countryName" type="text" placeholder="Enter country" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="location" className="block text-sm font-medium">Location</label>
                    <input name="location" id="location" type="text" placeholder="Enter location details" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium">Short Description</label>
                    <textarea name="description" id="description" placeholder="Enter a short description" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required></textarea>
                </div>
                <div>
                    <label htmlFor="averageCost" className="block text-sm font-medium">Average Cost</label>
                    <input name="averageCost" id="averageCost" type="number" placeholder="Enter cost" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required />
                </div>
                <div>
                    <label htmlFor="seasonality" className="block text-sm font-medium">Seasonality</label>
                    <input name="seasonality" id="seasonality" type="text" placeholder="E.g., Summer, Winter" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required />
                </div>
                <div>
                    <label htmlFor="travelTime" className="block text-sm font-medium">Travel Time</label>
                    <input name="travelTime" id="travelTime" type="text" placeholder="E.g., 7 days" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required />
                </div>
                <div>
                    <label htmlFor="totalVisitorsPerYear" className="block text-sm font-medium">Total Visitors Per Year</label>
                    <input name="totalVisitorsPerYear" id="totalVisitorsPerYear" type="number" placeholder="E.g., 10000" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required />
                </div>
                {/* <div>
                    <label htmlFor="userEmail" className="block text-sm font-medium">User Email</label>
                    <input name="userEmail" id="userEmail" type="email" placeholder="Enter your email" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required />
                </div> */}
                {/* <div>
                    <label htmlFor="userName" className="block text-sm font-medium">User Name</label>
                    <input name="userName" id="userName" type="text" placeholder="Enter your name" className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300" required />
                </div> */}
            </fieldset>
            <div className="flex justify-end">
                <input className="btn px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none" type="submit" value="Add Tourist Spot" />
            </div>
        </form>
    </section>
    
    );
};

export default AddTouristSpot;