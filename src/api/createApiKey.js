import axios from "axios";

const backendUrl = "http://localhost:3000"

export const createApiKey = async (useremail) => {
  const response = await axios.post(`${backendUrl}/api/creatingapikey`, {useremail});
  return response.data;
}