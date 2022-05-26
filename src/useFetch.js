import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
