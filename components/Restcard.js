export default function Restcard(props) {
  const { cloudinaryImageId, restName, cuisines, starRating, costForTwo } =
    props;
  const image_url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <li className="rest-card">
      <img
        className="rest-card-image recipe-image"
        alt="Recipe Image"
        src={`${image_url}${cloudinaryImageId}`}
      />
      <div>
        <h3>{restName}</h3>
        <p>{cuisines?.slice(0, 3).join(", ")}</p>
        <div className="rest-card-details">
          <p className="rest-card-rating">{starRating} ★ </p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </li>
  );
}
