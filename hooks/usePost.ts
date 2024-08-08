import { Listings } from "../entities";
import APIClient from "../services/api-clients";

const apiClient = new APIClient("/listings");

const usePost = () => {
  const post = async (data: Listings): Promise<boolean> => {
    try {
      const response = await apiClient.post(data);
      return response ? true : false;
    } catch (error) {
      return false;
    }
  };

  return { post };
};

export default usePost;
