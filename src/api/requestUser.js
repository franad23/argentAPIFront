import axios from "axios";

const backendUrl = "http://localhost:3000";

export const PostRequest = async (userobject, apiKey) => {
  const response = await axios.post(`${backendUrl}/api/creatingapikey`, userobject, {
    headers: {
      "Content-Type": "application/json",
      "apiKey": apiKey,
    },
  })
  return response.data;
}