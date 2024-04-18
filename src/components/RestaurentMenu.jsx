import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  // const [resinfo, setResinfo] = useState(null);
  const { resId } = useParams();
  const resinfo = useRestaurentMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResinfo(json.data);
  // };

  console.log("resinfo", resinfo);
  const itemCards =
    resinfo?.cards[4].groupedCard.cardGroupMap?.REGULAR?.cards[14]?.card?.card
      ?.itemCards;

  // Check if itemCards is not undefined and has at least one element before accessing its first element
  if (itemCards && itemCards.length > 0) {
    console.log("itemCards====", itemCards[0].card.info.name);
  } else {
    console.log("itemCards is undefined or empty");
  }

  if (resinfo === null) return <Shimmer />;
  // BOX8 - Desi Meals
  return (
    <>
      {/* <h2>{resinfo?.cards[0].card.card.info.name}</h2> */}
      {/* <h1>{resinfo?.cards}</h1> */}
      <div className="menu">
        <p>Menu card</p>
        <ul>
          {itemCards.map(
            (item, index) =>
              // Check if item.card, item.card.info, and item.card.info.name exist before accessing the name property
              item &&
              item.card &&
              item.card.info &&
              item.card.info.name && (
                <li key={index}>{itemCards[0].card.info.name}</li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

export default RestaurentMenu;
