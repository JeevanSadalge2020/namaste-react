import Restcard from "../components/Restcard.js";
import restData from "../data.json";

export default function Main() {
  const restList =
    restData?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  //   console.log("data", restList);
  const restaurants = restList.map(({ info }) => {
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
  return (
    <main>
      <form method="Post">
        <label for="rest-name">Enter restaurant name</label>
        <input type="text" name="rest-name"></input>
      </form>
      <ul className="rest-card-container">{restaurants}</ul>
    </main>
  );
}
