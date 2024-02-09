import { useEffect, useState } from "react";

export const useData = (requestData, initial = null) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requestData();
        setData(response.data.data.results);
      } catch (err) {
        throw new Error("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

// export const useData = (requestData, initial = null) => {
//     const [data, setData] = useState(initial);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchData = useCallback(async () => {
//       try {
//         const response = await requestData();
//         setData(response.data.data.results);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     }, [requestData]);

//     useEffect(() => {
//       fetchData();
//     }, []);

//     return { data, loading, error };
//   };
