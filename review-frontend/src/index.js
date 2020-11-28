const api = new ApiService("http://localhost:3000/api/v1"); // has to be global
const propertyCollectionDiv = document.querySelector('.property-collection'); // getting a container for the cards

//fires off listing of properties
PropertyCard.getAll();
