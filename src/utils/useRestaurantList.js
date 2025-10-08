//custom hook
// fetching data from external api
//  return listOfRestaurants,allRestaurants
import { useState, useEffect } from "react";
import { RES_DATA_URL } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

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
    setAllRestaurants(restaurants);
  };

  return [listOfRestaurants, allRestaurants,setListOfRestaurants,setAllRestaurants];
};

export default useRestaurantList;
