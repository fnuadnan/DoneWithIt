import { useEffect, useState } from "react";
import { Listing } from "../../entities";
import useStore from "../../store";
import APIClient from "../api-clients";

interface ApiResponse<T> {
  message: string;
  data: T;
}

const apiClient = new APIClient<ApiResponse<Listing[]>>("/listings");

const useGetListings = () => {
  const { listings, setListings } = useStore();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const loadListings = async () => {
    setError(""); // Reset the error before fetching data
    setLoading(true);
    
    try {
      const response = await apiClient.get("66e26993dcee50113374d571"); // for testing
      setListings(response.data);
    } catch (error) {
      setError("An error occurred.");
    }

    setLoading(false); // Stop loading after the request completes, regardless of success or failure
  };

  useEffect(() => {
    loadListings();
  }, []);

  return { listings, error, loading, loadListings };
};

export default useGetListings;
