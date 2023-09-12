import axios from "axios";

const backendUrl = "http://localhost:3000";

export const PostRequest = async (userobject, apiKey) => {
  const response = await axios.post(`${backendUrl}/api/postrequest`, userobject, {
    headers: {
      "apiKey": apiKey,
    }
  })
  return response.data;
}

export const GetRequest = async (apiKey) => {
  const response = await axios.get(`${backendUrl}/api/getrequest`, {
    headers: {
      "apiKey": apiKey,
    }
  })
  return response.data;
}