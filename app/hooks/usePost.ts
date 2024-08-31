import { Listing } from "../entities";
import APIClient from "../services/api-clients";
import useStore from "../store";

const apiClient = new APIClient<Listing>("/listings");

const usePost = () => {
  const { addListing } = useStore();
  const post = async (data: Listing): Promise<boolean> => {
    try {
      const response = await apiClient.post(data);
      if (response) {
        addListing(response); // Add the new listing to the store
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  return { post };
};

export default usePost;
