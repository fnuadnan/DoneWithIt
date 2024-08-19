import axios from "axios";
import cache from "../Utility/cache";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.117:3000/api",
}); //192.168.1.91:8081

class APIClient<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // get by id
  async get(id: string) {
    const cacheKey = this.endpoint + id; // create a cache key

    try {
      // if successful, store the data in the cache and return the data
      const response = await axiosInstance.get<T>(cacheKey); // get the data from the endpoint
      if (response.data) {
        await cache.store(cacheKey, response.data); // store the data in the cache
        return response.data; // return the dat
      }

      return null;
    } catch (error) {
      console.error("Network request failed, falling back to cache:", error);

      // If the network request fails, try to get data from the cache
      const cachedData = await cache.get<T>(cacheKey);
      if (cachedData) return cachedData; // Return cached data if available

      throw new Error("Error fetching data from both network and cache.");
    }
  }

  // get all data from the endpoint if not get from cache
  async getAll() {
    try {
      const response = await axiosInstance.get<T[]>(this.endpoint);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

  // post data
  async post(data: T) {
    try {
      const response = await axiosInstance.post<T>(this.endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
}

export default APIClient;
