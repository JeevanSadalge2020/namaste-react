import Restcard from "./Restcard.js";
import restData from "../data.json";
import { useState } from "react";

function Main() {
  const restList =
    restData?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);

  const restaurantsToRender = listOfRestaurants.map(({ info }) => {
    const { name, avgRatingString, costForTwo, cloudinaryImageId, cuisines } =
      info;
    return (
      <Restcard
        restName={name}
        starRating={avgRatingString}
        cuisines={cuisines}
        costForTwo={costForTwo}
        cloudinaryImageId={cloudinaryImageId}
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

export default Main;
