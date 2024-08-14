import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.91:3000/api",
}); //192.168.1.91:8081

class APIClient<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // get by id
  async get(id: string) {
    try {
      const response = await axiosInstance.get<T>(`${this.endpoint}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

  // get all
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
