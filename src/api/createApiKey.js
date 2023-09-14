import axios from "axios";
import backendurl from "../components/helpers/backendurl.js"; 


export const createApiKey = async (useremail) => {
  const response = await axios.post(`${backendurl}/api/creatingapikey`, {useremail});
  return response.data;
}