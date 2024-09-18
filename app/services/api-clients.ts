import axios from "axios";
import getCurrentSettings from "../config/settings";

const axiosInstance = axios.create({
  baseURL: getCurrentSettings().apiUrl,
}); //192.168.1.91:8081
interface ApiResponse<T> {
  message: string;
  data: T;
}


class APIClient<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // get by id
  // async get(id: string) {
  //   const cacheKey = this.endpoint + id; // create a cache key

  //   try {
  //     // if successful, store the data in the cache and return the data
  //     const response = await axiosInstance.get<T>(cacheKey); // get the data from the endpoint
  //     if (response.data) {
  //       await cache.store(cacheKey, response.data); // store the data in the cache
  //       return response.data; // return the dat
  //     }

  //     return null;
  //   } catch (error) {
  //     console.error("Network request failed, falling back to cache:", error);

  //     // If the network request fails, try to get data from the cache
  //     const cachedData = await cache.get<T>(cacheKey);
  //     if (cachedData) return cachedData; // Return cached data if available

  //     throw new Error("Error fetching data from both network and cache.");
  //   }
  // }

  // get by id
  async get(id: string) {
    try {
      const response = await axiosInstance.get<T>(this.endpoint + "/" + id);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
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
  async post(data: T, id: string) {
    try {
      const response = await axiosInstance.post<ApiResponse<T>>(this.endpoint + '/' + id, data);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

  // get user by id
  async getUser(id: string) {
    try {
      const response = await axiosInstance.get<ApiResponse<T>>(this.endpoint + '/' + id);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
}

export default APIClient;
