import axios from "axios";

//This class  api is for request
export class Request {
  constructor(limit) {
    this.url = `https://api.giphy.com/v1/gifs/trending?api_key=h6Po8KmmE34mmMopEgeabtggyaTvviYi&limit=${limit}&rating=G`;
  }
  async get() {
    const response = await axios.get(this.url).then(data => data.data.data);

    return response;
  }
  async getSearchResult(value, limit) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=h6Po8KmmE34mmMopEgeabtggyaTvviYi&q=${value}&limit=${limit}&offset=0&rating=G&lang=en`;
    const response = await axios.get(url).then(data => data.data.data);
console.log("servis",response)
    return response;
  }
}
