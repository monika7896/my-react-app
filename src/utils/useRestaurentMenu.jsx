import { MENU_API } from "../utils/constant";
import { useEffect, useState } from "react";
import React from "react";

const useRestaurentMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log("jsfksfk", json);
    setresInfo(json.data);
  };
  return resInfo;
};

export default useRestaurentMenu;
