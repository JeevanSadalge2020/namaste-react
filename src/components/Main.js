import Restcard from "./Restcard.js";
import staticData from "../data.json";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { SWIGGY_API_URL } from "../utils/constants.js";

function Main() {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  function fetch_swiggy_data() {
    getData()
      .then((res) => {
        const restList =
          res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        listOfRestaurants = setListOfRestaurants(restList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(fetch_swiggy_data, []);

  let list = new Array(10).fill(0);

  const restaurantsToRender =
    listOfRestaurants.length === 0
      ? list.map((item, ind) => <Shimmer key={ind} />)
      : listOfRestaurants.map(({ info }) => {
          const {
            name,
            avgRatingString,
            costForTwo,
            cloudinaryImageId,
            cuisines,
            id,
          } = info;
          return (
            <Restcard
              restName={name}
              starRating={avgRatingString}
              cuisines={cuisines}
              costForTwo={costForTwo}
              cloudinaryImageId={cloudinaryImageId}
              key={id}
            ></Restcard>
          );
        });

  function filterListOfRestaurants() {
    let filteredListOfRestaurants = listOfRestaurants.filter(
      (rest) => rest.info.avgRatingString > 4.5
    );
    setListOfRestaurants(filteredListOfRestaurants);
  }

  return (
    <main>
      <button className="filter-btn" onClick={filterListOfRestaurants}>
        Filter restaurants
      </button>
      <ul className="rest-card-container">{restaurantsToRender}</ul>
    </main>
  );
}

async function getData() {
  const url = SWIGGY_API_URL;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("hello");
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
    return staticData;
  }
}

export default Main;
