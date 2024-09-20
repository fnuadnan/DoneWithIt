import { User } from "../../entities";
import APIClient from "../api-clients";

const apiClient = new APIClient<User>("/users");

const useUpdateUser = () => {
  const update = async (data: User): Promise<boolean> => {
    try {
      const response = await apiClient.update("66e26993dcee50113374d571", data);
      if (response) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  return { update };
};

export default useUpdateUser;
