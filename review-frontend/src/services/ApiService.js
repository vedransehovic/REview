class ApiService {
    constructor(baseURL){
        this.baseURL = baseURL;
    }

    getAllProperties = () => fetch(`${this.baseURL}/properties`).then(res => res.json());
}