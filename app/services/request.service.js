import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class RequestService {
    example() {
        return axios
        .post(API_URL)
        .then(response);
    }
}

export default new RequestService();