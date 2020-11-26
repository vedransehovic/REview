class PropertyCard {
    constructor(property) {
        this.property = property;
        this.renderProperty();
        PropertyCard.all.push(this);
    }

    static all = []

    static getAll() {
        api.getAllProperties().then((data) => {
            data.forEach((property) => new PropertyCard(property))
            const states = this.generateStateList()
            new StateDropdown(states);
        }
            
        );
    };

    static renderByState(abbr){
        propertyCollectionDiv.innerHTML = ""
        this.all.map(propertyCard => {
            if(propertyCard.property.state.abbreviation === abbr ){
                propertyCard.renderProperty()
            }
        })
    }

    static generateStateList(){
        let stateList = [];
        for (const propertyCard of this.all) {
            if (!stateList.includes(propertyCard.property.state.abbreviation)) {
                stateList.push(propertyCard.property.state.abbreviation);
            }
        }
        return stateList;
    }

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