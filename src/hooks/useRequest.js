import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (initUrl, content) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: '' });

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios(initUrl);
        console.log(response);
        if (!ignore) setData(response.data);
      } catch (err) {
        setError({ error: err });
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
    return () => {
      ignore = true;
    };
  }, [initUrl, content]);

  return { data, loading, error };
};

export default useRequest;
