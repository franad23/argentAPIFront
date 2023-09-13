import axios from "axios";
import backendurl from "../components/helpers/backendurl.js"; 

export const PostRequest = async (userobject, apiKey) => {
  const response = await axios.post(`${backendurl}/api/postrequest`, userobject, {
    headers: {
      "apiKey": apiKey,
    }
  })
  return response.data;
}

export const GetRequest = async (apiKey) => {
  const response = await axios.get(`${backendurl}/api/getrequest`, {
    headers: {
      "apiKey": apiKey,
    }
  })
  return response.data;
}