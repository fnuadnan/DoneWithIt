import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://172.20.10.7:3000/api",
});

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
}

export default APIClient;
