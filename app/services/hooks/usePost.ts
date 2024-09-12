import { Listing } from "../../entities";
import useStore from "../../store";
import APIClient from "../api-clients";

// interface ApiResponse<T> {
//   message: string;
//   data: T;
// }

const apiClient = new APIClient<Listing>("/listings");

const usePost = () => {
  const { addListing } = useStore();
  const post = async (data: Listing): Promise<boolean> => {
    try {
      const response = await apiClient.post(data, "66e26993dcee50113374d571");
      console.log("response", response);
      if (response && response.data) {
        addListing(response.data); // Add the new listing to the store
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
