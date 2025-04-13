import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const MYList = () => {
  const touristSpots = useLoaderData();

  const [mySpots, setMySpots] = useState(touristSpots);
  const [updatedSpot, setUpdatedSpot] = useState({});

  // handle update a tourist spot
  const handleUpdate = (id) => {
    const spot = mySpots.find((spot) => spot._id === id);
    setUpdatedSpot(spot);
    // console.log(updatedSpot)
  };

  const updateSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = updatedSpot._id;
    const imageUrl = form.imageUrl.value;
    const touristSpotName = form.touristSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const description = form.description.value;
    const averageCost = parseFloat(form.averageCost.value);
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = parseInt(form.totalVisitorsPerYear.value, 10);

    const updateSpotValue = {
      id,
      imageUrl,
      touristSpotName,
      countryName,
      location,
      description,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
    };

    fetch(`https://touris-hub-server.vercel.app/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSpotValue),
    })
      .then((res) => res.json())
      .then((data) => {

        console.log(data);
        if (data.modifiedCount > 0 || data.acknowledged) {
          // Update the local state
          const updatedList = mySpots.map((spot) =>
            spot._id === id ? { ...spot, ...updateSpotValue } : spot
          );
          setMySpots(updatedList);
  
          Swal.fire({
            icon: "success",
            title: "Updated!",
            text: "Tourist spot updated successfully.",
            timer: 2000,
            showConfirmButton: false,
          });
  
          //  Close the modal
          document.getElementById("my_modal_5").close();
        }
      });
    //  console.log(updateSpotValue)
    
  };

  // handle delete a touris spot
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://touris-hub-server.vercel.app/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            console.log(data.deletedCount);
            const remSpots = mySpots.filter((spot) => spot._id != id);
            setMySpots(remSpots);
          });
      }
    });
  };

  // console.log(mySpots);

  return (
    <div className="max-w-6xl mx-auto my-8">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Spot</th>
              <th>Time & Cost</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mySpots.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center text-red-500 font-semibold"
                >
                  No data found
                </td>
              </tr>
            ) : (
              mySpots.map((spot) => (
                <tr key={spot._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={spot.imageUrl} alt="Spot" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{spot.touristSpotName}</div>
                        <div className="text-sm opacity-50">
                          {spot.countryName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {spot.travelTime}
                    <br />
                    <span className="text-blue-500">{spot.averageCost}$</span>
                  </td>
                  <td>{spot.location}</td>
                  <th>
                    <div className="space-x-2 space-y-2 md:space-y-0">
                      <button
                        onClick={() => {
                          handleUpdate(spot._id);
                          document.getElementById("my_modal_5").showModal();
                        }}
                        className="btn btn-soft btn-warning btn-xs"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(spot._id)}
                        className="btn btn-soft btn-error btn-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </th>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box relative">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <div className="py-4">
              <form onSubmit={updateSpot} className="space-y-6">
                <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-md">
                  <div className="col-span-full text-center">
                    <h2 className="text-2xl font-bold">Update Tourist Spot</h2>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="imageUrl"
                      className="block text-sm font-medium"
                    >
                      Image URL
                    </label>
                    <input
                      name="imageUrl"
                      id="imageUrl"
                      type="text"
                      defaultValue={updatedSpot.imageUrl}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="touristSpotName"
                      className="block text-sm font-medium"
                    >
                      Tourist Spot Name
                    </label>
                    <input
                      name="touristSpotName"
                      id="touristSpotName"
                      type="text"
                      defaultValue={updatedSpot.touristSpotName}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="countryName"
                      className="block text-sm font-medium"
                    >
                      Country Name
                    </label>
                    <input
                      name="countryName"
                      id="countryName"
                      type="text"
                      defaultValue={updatedSpot.countryName}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium"
                    >
                      Location
                    </label>
                    <input
                      name="location"
                      id="location"
                      type="text"
                      defaultValue={updatedSpot.location}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium"
                    >
                      Short Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      defaultValue={updatedSpot.description}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="averageCost"
                      className="block text-sm font-medium"
                    >
                      Average Cost
                    </label>
                    <input
                      name="averageCost"
                      id="averageCost"
                      type="number"
                      defaultValue={updatedSpot.averageCost}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="seasonality"
                      className="block text-sm font-medium"
                    >
                      Seasonality
                    </label>
                    <input
                      name="seasonality"
                      id="seasonality"
                      type="text"
                      defaultValue={updatedSpot.seasonality}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="travelTime"
                      className="block text-sm font-medium"
                    >
                      Travel Time
                    </label>
                    <input
                      name="travelTime"
                      id="travelTime"
                      type="text"
                      defaultValue={updatedSpot.travelTime}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="totalVisitorsPerYear"
                      className="block text-sm font-medium"
                    >
                      Total Visitors Per Year
                    </label>
                    <input
                      name="totalVisitorsPerYear"
                      id="totalVisitorsPerYear"
                      type="number"
                      defaultValue={updatedSpot.totalVisitorsPerYear}
                      className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                </fieldset>

                {/* Bottom Buttons: Cancel & Submit */}
                <div className="flex justify-between px-6 pb-4">
                  {/* Cancel Button */}
                  <form method="dialog">
                    <button
                      type="submit"
                      className="btn px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none"
                    >
                      Cancel
                    </button>
                  </form>

                  {/* Submit Button */}
                  <input
                    className="btn px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none"
                    type="submit"
                    value="Update Tourist Spot"
                  />
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MYList;
