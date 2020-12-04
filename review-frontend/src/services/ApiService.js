class ApiService {
    constructor(baseURL){
        this.baseURL = baseURL;
    }

    getAllProperties = () => fetch(`${this.baseURL}/properties`).then(res => res.json());

    updatePaid = (id) => fetch(`${this.baseURL}/properties/${id}`, {method: "PATCH"}).then(res => res.json());

    updateForm = (id, formData) => {
        const config = { 
            method: "PATCH",
            body: formData
        }
        return fetch(`${this.baseURL}/properties/${id}`, config).then(res => res.json());
    }

}