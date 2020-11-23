class PropertyCard {
    constructor(property) {
        this.property = property;
        this.renderProperty();
        console.log(this);
    }

    static getAll() {
        api.getAllProperties().then((data) => 
            data.forEach((property) => new PropertyCard(property))
        );
    };

    renderProperty(){
        propertyCollectionDiv.innerHTML +=
        `
        <div class="card">
        <img src="${this.property.photo}" alt="Avatar" style="width:100%">
        <div class="cardcontainer">
          <b>${this.property.address}</b>
          <p>Rent: ${this.property.rent} <br>
          Expenses: ${this.property.expenses}<br>
          <button type="button">Click Me!</button>
          </p> 
        </div>
        </div>
        `
    }
}