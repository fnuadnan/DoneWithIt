import { useEffect, useState } from "react";
import { User } from "../../entities";
import APIClient from "../api-clients";

const apiClient = new APIClient<User>("/users");

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      const response = await apiClient.getUser('66e26993dcee50113374d571'); // Fetch user with id 1
      setUser(response.data); // Set user data
    } catch (error) {
      setError("Error fetching user");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser(); // Triggers the asynchronous user fetching
  }, []);

  return { user, error, refresh: fetchUser };
};

export default useUser;
