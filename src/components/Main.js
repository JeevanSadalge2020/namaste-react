import Restcard from "./Restcard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import getData from "../data.js";

function Main() {
  let [listOfRests, setListOfRests] = useState([]);

  useEffect(fetch_swiggy_data, []); // As soon as swiggy API data is received, react re-renderes the UI

  let list = new Array(10).fill(0);

  // Until API data is received, show shimmer UI
  const restsToRender =
    listOfRests.length === 0
      ? list.map((item, ind) => <Shimmer key={ind} />)
      : listOfRests.map(({ info }) => {
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

  function filterBestRests() {
    let list = listOfRests.filter((rest) => rest.info.avgRatingString > 4.5);
    setListOfRests(list);
  }

  function showListOfSearchRests(rest) {
    console.log(rest);
  }

  return (
    <main>
      <button className="filter-btn" onClick={filterBestRests}>
        Filter restaurants
      </button>
      <div className="search">
        <label htmlFor="search">Search Restaurant</label>
        <input type="text" placeholder="Enter restaurant name"></input>
        <button className="btn-search" onClick={showListOfSearchRests}>
          Search
        </button>
      </div>
      <ul className="rest-card-container">{restsToRender}</ul>
    </main>
  );

  function fetch_swiggy_data() {
    getData()
      .then((res) => {
        const restList =
          res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        listOfRests = setListOfRests(restList); // Once swiggy data is received, then assign that data to our list of restaurants
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Main;
