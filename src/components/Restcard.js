import restImageUrl from "../utils/constants";

function Restcard(props) {
  const { cloudinaryImageId, restName, cuisines, starRating, costForTwo } =
    props;

  return (
    <li className="rest-card">
      <img
        className="rest-card-image recipe-image"
        alt="Recipe Image"
        src={`${restImageUrl}${cloudinaryImageId}`}
      />
      <div className="rest-card-info">
        <h3>{restName}</h3>
        <p>{cuisines?.slice(0, 3).join(", ")}</p>
        <div>
          <p className="rest-card-rating">{starRating} ★ </p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </li>
  );
}

export default Restcard;
