import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const onlineStatus = useOnlineStatus();
  const [
    listOfRestaurants,
    allRestaurants,
    setListOfRestaurants,
    setAllRestaurants,
  ] = useRestaurantList();

  const searchRestaurants = () => {
    console.log(allRestaurants);
    const filteredrestaurants = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    filteredrestaurants.length !== 0
      ? setListOfRestaurants(filteredrestaurants)
      : alert("Restaurant not found!");

    setSearchInput("");
    // console.log(filteredrestaurants);
  };

  if (!onlineStatus) {
    return (
      <h1>Oops! looks like you are offline! check your internet connection.</h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button className="search-btn" onClick={searchRestaurants}>
            search
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = allRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="allrestaurants"
            onClick={() => {
              setListOfRestaurants(allRestaurants);
            }}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <Link
              className="link"
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resObj={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
