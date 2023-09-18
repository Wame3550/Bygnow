import axios from "axios";

export const getBlogpost = async (page: Number) => {
  const response = await axios.get(`/api/posts?limit=5&page=${page}`);
  return response.data;
};
