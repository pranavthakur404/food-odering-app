import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetching() {
    const res = await fetch(url);
    const resData = await res.json();
    console.log(resData);
    setData(resData?.data?.cards);
    setLoading(false);
  }

  useEffect(() => {
    fetching();
  }, [url]);

  return { data, loading };
};

export default useFetch;
