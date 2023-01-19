import axios from "axios";

const getAPI = axios.get("https://api.spacexdata.com/v3/launches/");

export {
    getAPI
}