
import { useParams } from "react-router-dom";
import { RESTURANT_DETAILS_URL } from "../utils/constant";
import ToggleContainer from "../res_details_component/ToggleContainer";
import HomeShimmer from "../Shimmer/HomeShimmer";
import useFetch from "../utils/useFetch";

const ResturantDetails = () => {
  const { resId } = useParams();

  const { data, loading } = useFetch(`${RESTURANT_DETAILS_URL}/${resId}`);

  if (loading) {
    return <HomeShimmer />;
  }

  return (
    <main className="resDetails-container">
      <div className="card1">
        <div className="name">
          <h3>{data[0].card.card.info.name}</h3>
          <p>{data[0].card.card.info.cuisines.join(", ")}</p>
          <p>{data[0].card.card.info.locality} </p>
        </div>
        <div className="rating">
          <span>{data[0].card.card.info.avgRating}</span>
          <hr />
          <span>{data[0].card.card.info.totalRatingsString}</span>
        </div>
      </div>
      {/* card 2 */}
      <div className="items-container">
        {data[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          .slice(1)
          .map((list, index) => {
            return <ToggleContainer data={list.card.card} key={index} />;
          })}
      </div>
    </main>
  );
};

export default ResturantDetails;
