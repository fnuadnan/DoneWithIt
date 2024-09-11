import { useEffect, useState } from "react";
import { User } from "../../entities";
import APIClient from "../api-clients";

const apiClient = new APIClient<User>("/users");

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      const user = await apiClient.getUser(1); // Fetch user with id 1
      setUser(user); // Set user data
    } catch (error) {
      setError("Error fetching user");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser(); // Triggers the asynchronous user fetching
  }, []);

  return { user, error };
};

export default useUser;
