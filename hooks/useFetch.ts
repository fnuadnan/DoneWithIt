import { useEffect, useState } from "react";
import APIClient from "../services/api-clients";

//
const apiClient = new APIClient<Listing>("/listings");

const useFetch = () => {
  const [data, setData] = useState<Listing[]>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const loadListings = async () => {
    setError(""); // Reset the error before fetching data
    setLoading(true);
    try {
      const data = await apiClient.getAll();
      setData(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("An error occurred.");
    }
  };

  useEffect(() => {
    loadListings();
  }, []);

  return { data, error, loading, loadListings };
};

type Listing = {
  id: number;
  title: string;
  image: string;
  price: number;
  categoryId: number;
  userId: number;
  location: {
    latitude: number;
    longitude: number;
  };
  description?: string;
};

export default useFetch;
