import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = props?.resObj?.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h4>{name}</h4>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
