class PropertyCard {
    constructor(property) {
        this.property = property;
        this.renderProperty();
        PropertyCard.all.push(this);
    }
    //this array will contain all properties
    static all = []

    //gets all "fetched" properties and generates "card" for each one. After that it initates buidling of a dropdown menu.
    static getAll() {
        api.getAllProperties().then((data) => {
            data.forEach((property) => new PropertyCard(property))
            const states = this.generateStateList()
            new StateDropdown(states);
        }
            
        );
    };

    //renders list of properties by state chosen.
    static renderByState(abbr){
        propertyCollectionDiv.innerHTML = ""
        this.all.map(propertyCard => {
            if(propertyCard.property.state.abbreviation === abbr ){
                propertyCard.renderProperty()
            }
        })
    }

    //generates list of states that will be source for the pulldown menu
    static generateStateList(){
        let stateList = [];
        for (const propertyCard of this.all) {
            if (!stateList.includes(propertyCard.property.state.abbreviation)) {
                stateList.push(propertyCard.property.state.abbreviation);
            }
        }
        return stateList;
    }

    //renders property card
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