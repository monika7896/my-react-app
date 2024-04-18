import Restaurant from "./Restuarent";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setfilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.507241&lng=77.06404859999999&collection=83670&tags=layout_CCS_Rolls&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const jsonData = await response.json();
      console.log("jsonData", jsonData);

      const restaurants =
        jsonData?.data?.cards?.map((card) => card?.card?.card?.info) || [];
      const filteredRestaurants = restaurants.filter(
        (restaurant) => restaurant !== undefined
      );
      console.log("restaurants", filteredRestaurants);
      setListOfRestaurants(filteredRestaurants);
      setfilteredData(filteredRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error: Set listOfRestaurants to an empty array
      // setListOfRestaurants([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4">
          {/* <div className="search"> */}
          <input
            type="text"
            // className="search-box "
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-1 m-2 bg-green-300"
            onClick={() => {
              console.log("pppp", searchText);
              const filteredDataN = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );

              // console.log("filteredDatab4444", filteredDataN);
              setfilteredData(filteredDataN);
            }}
          >
            Search
          </button>
          <button
            className="px-1 m-2 bg-gray-300 "
            onClick={() => {
              const filtredList = listOfRestaurants.filter(
                (res) => res.avgRating > 4
              );

              setListOfRestaurants(filtredList);
            }}
          >
            {" "}
            Top rated Restuarent
          </button>
        </div>
        {/* <div className="search m-4 p-4">
          <button
            className="px-0.5 m-1 bg-gray-300 flex item-center"
            onClick={() => {
              const filtredList = listOfRestaurants.filter(
                (res) => res.avgRating > 4
              );

              setListOfRestaurants(filtredList);
            }}
          >
            {" "}
            Top rated Restuarent
          </button>
        </div> */}
      </div>
      {/* <div className="search"> Search</div> */}
      <div className="flex flex-wrap">
        {filteredData.length > 0 ? (
          // Render restaurants if the list is not empty
          // filteredData.map((restaurant, index) => (
          //   <Link to={"/menu/" + restaurant.data.id}>
          //     <Restaurant key={index} resData={restaurant} />
          //   </Link>
          // ))
          filteredData.map((restaurant, index) => {
            console.log(restaurant.id);
            return (
              <Link to={"/menu/" + restaurant.id} key={index}>
                <Restaurant key={index} resData={restaurant} />
              </Link>
            );
          })
        ) : (
          // Display a message if the list is empty
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
