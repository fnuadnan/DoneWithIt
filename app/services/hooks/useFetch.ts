import { useEffect, useState } from "react";
import { Listing } from "../../entities";
import useStore from "../../store";
import APIClient from "../api-clients";

//
const apiClient = new APIClient<Listing>("/listings");

const useFetch = () => {
  const { listings, setListings } = useStore();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const loadListings = async () => {
    setError(""); // Reset the error before fetching data
    setLoading(true);
    try {
      const data = await apiClient.getAll();
      setListings(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("An error occurred.");
    }
  };

  useEffect(() => {
    loadListings();
  }, []);

  return { listings, error, loading, loadListings };
};

export default useFetch;
