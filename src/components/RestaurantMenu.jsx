import { useEffect, useState } from "react";
import { ITEM_IMG_URL, MENU_URL } from "../utils/constants";
import { use } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const [itemInfo, setItemInfo] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setresInfo(json?.data?.cards[2]?.card?.card?.info);

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

  console.log(resInfo);
  console.log(itemInfo);

  if (resInfo === null || itemInfo.length === 0) return <Shimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    sla,
    cuisines,
  } = resInfo;

  return (
    <div className="menu-container">
      <div className="info-section">
        <h1 className="title">{name}</h1>
        <h3>
          {avgRating} ({totalRatingsString}) . {costForTwoMessage}
        </h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>Outlet - {areaName}</h4>
        <h4>
          {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
        </h4>
      </div>
      <div className="items-section">
        {itemInfo.map((item) => {
          return (
            <div key={item.card.info.id} className="item-info">
              <div className="left">
                <h3>{item.card.info.name}</h3>
                <h4>
                  ₹
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                </h4>
                {Object.keys(item.card.info.ratings.aggregatedRating).length ===
                0 ? (
                  <h5>no ratings yet!</h5>
                ) : (
                  <h5>
                    ⭐{item.card.info.ratings.aggregatedRating.rating} (
                    {item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </h5>
                )}
                <h5 className="item-description">
                  {item.card.info.description}
                </h5>
              </div>
              <div className="right">
                <img src={ITEM_IMG_URL + item.card.info.imageId} />
                <button>Add</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
