import { CDN_URL } from "../utils/constant";

const styleCard = {
  // margin: "1rem", // Equivalent to m-4 (margin: 1rem)
  // padding: "1rem", // Equivalent to p-4 (padding: 1rem)
  // width: "14.5rem", // Equivalent to w-58 (width: 14.5rem)
  // backgroundColor: "LightSeaGreen",
};

const Restaurant = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, cuisines } =
    resData?.card?.card?.info ?? {};

  // Ensure cuisines is an array before joining its elements
  const cuisineList = Array.isArray(cuisines) ? cuisines.join(", ") : "";

  return (
    <>
      <div className="m-4 p-4 w-60 h-72 rounded-lg bg-gray-200 hover:bg-gray-400">
        <img
          className="m-1 p-1 "
          // className="card-logo"
          src={CDN_URL + resData.cloudinaryImageId}
          alt={name}
        ></img>
        <h3 className="font-bold">{resData.name}</h3>
        <h4>{resData.avgRating}</h4>
        <h5>{resData.cuisines.join(",")}</h5>
      </div>
    </>
  );
};

export default Restaurant;
