import axios from "axios";

export const baseUrl = "https://jtlt-api-server.herokuapp.com/tweets/?q=";

export const getTweets = async (search) => {
  const searchQ = search;
  const fullUrl = `${baseUrl}${searchQ}`;
  const results = axios.get(fullUrl).then(({ data }) => data);
  return results;
};

export default getTweets;
