class PropertyCard {
    constructor(property) {
        this.property = property
    }

    static getAll() {
        api.getAllProperties().then(data => console.log(data))
    } 
}