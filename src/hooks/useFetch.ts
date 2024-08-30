import { useEffect, useState } from "react";
import { FetcherSubmitOptions } from "react-router-dom/dist/dom";

export const useFetch = <T>(url: string, options?: FetcherSubmitOptions) => {
  const [data, setData] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, { ...options });
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [url, options]);
  return {
    data,
    isLoading
  };
};
