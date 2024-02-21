import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import HomeShimmer from "../Shimmer/HomeShimmer";


const Body = () => {
  const [allList, setAllList] = useState([]);
  const [list, setList] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.470931&lng=77.1830243&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    setAllList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchData.length > 0) {
      setList(() => {
        return allList.filter((list) => {
          return list.info.name
            .toLowerCase()
            .includes(searchData.toLowerCase());
        });
      });
    } else {
      setList(allList);
    }
  };

  return list && list.length === 0 ? (
    <HomeShimmer />
  ) : (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            setList(() => {
              return allList.filter((li) => {
                return li.info.avgRating > 4;
              });
            });
          }}
        >
          Top Rated Restraunts
        </button>
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search Restraunt...."
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="res-container">
        {list &&
          list.map((li) => {
            return <RestrauntCard key={li.info.id} {...li} />;
          })}
      </div>
    </div>
  );
};

export default Body;
