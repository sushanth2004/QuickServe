// this is custom hook
// used to fetch the restaurantMenu info from an external api.
// input - resId
// output - resInfo, itemInfo

import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [itemInfo, setItemInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setResInfo(json?.data?.cards[2]?.card?.card?.info);

    const items =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    items === undefined
      ? setItemInfo(
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card?.categories[0].itemCards
        )
      : setItemInfo(items);
  };

  return [resInfo, itemInfo];
};

export default useRestaurantMenu;
