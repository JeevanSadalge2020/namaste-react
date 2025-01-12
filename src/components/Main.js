import Restcard from "./Restcard.js";
// import staticData from "../data.json";
import { useState, useEffect } from "react";

function Main() {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  function fetch_swiggy_data() {
    getData().then((res) => {
      const restList =
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      listOfRestaurants = setListOfRestaurants(restList);
    });
  }

  useEffect(fetch_swiggy_data, []);

  const restaurantsToRender = listOfRestaurants.map(({ info }) => {
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
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.689239594133923&lng=74.25137657672167";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export default Main;
