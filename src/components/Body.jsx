import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllrestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_DATA_URL);

    const jsonData = await data.json();
    const restaurants =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

        

    setListOfRestaurants(restaurants);
    setAllrestaurants(restaurants);
  };

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
