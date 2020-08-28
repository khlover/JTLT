import axios from "axios";

export const baseUrl = "https://jtlt-api-server.herokuapp.com/jisho/?q=";

export const getDefo = async (search) => {
  const searchQ = search;
  const fullUrl = `${baseUrl}${searchQ}`;
  const results = axios.get(fullUrl).then(({ data }) => data.data);
  return results;
};

export default getDefo;
