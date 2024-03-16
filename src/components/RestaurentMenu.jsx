import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constant";

const RestaurentMenu = () => {
  const [resinfo, setResinfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log("data------", data);

    setResinfo(json.data);
    console.log("hjsjsjd----------", json.data.cards[0].card.card.info.name);
  };

  // const { name, cuisines, costForTwoMessage } =
  //   resinfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[14]?.card?.card
      ?.itemCards;

  //   console.log("itemCards====", itemCards);
  //   resinfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[0]
  //   .itemCards[0]
  //   ?.card?.info?.name
  console.log(
    "itemCards------",
    resinfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[14].card?.card
      ?.itemCards[0].card.info.name
  );

  if (resinfo === null) return <Shimmer />;

  return (
    <>
      <h2>{resinfo?.cards[0].card.card.info.name}</h2>
      <div className="menu">
        <p>Menu card</p>
        <ul>
          {itemCards.map((item) => (
            <li>{item.card.info.name}</li>
          ))}
          <li>{resinfo?.cards[0].card.card.info.name}</li>
          <li>
            {resinfo?.cards[0].card.card.info.cuisines.join(",")} -{" "}
            {resinfo?.cards[0].card.card.info.costForTwoMessage}
          </li>
          <li>{resinfo?.cards[0].card.card.info.costForTwoMessage}</li>
          <li>{itemCards[0].card.info.name}</li>
        </ul>
      </div>
    </>
  );
};

export default RestaurentMenu;
