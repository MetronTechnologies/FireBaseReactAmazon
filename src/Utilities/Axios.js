import axios from "axios";

const instance = axios.create(
    {
        baseURL: "http://localhost:5001/client-9ad79/us-central1/api",
    }
);


export default instance;

