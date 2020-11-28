class PropertyCard {
    static container = document.querySelector('.property-collection'); // getting a container for the cards

    constructor(property) {
        this.property = property;
        this.render();
        this.attachEventListener();
        PropertyCard.all.push(this);
    }
    //this array will contain all properties
    static all = []

    attachEventListener() {
        this.card.addEventListener('click', this.handleOnClick);
    }

    handleOnClick = (event) => {
        if (event.target.className == "edit") {
            console.log(this.card)
            debugger
        } else if (event.target.id == "paid"){
            //update the database (fetch update request)
            this.card.children[1].style.backgroundColor = "#ccffcc" ;
            this.card.children[1].children[1].children[0].innerHTML = '✔';
        }
    }

    //renders list of properties by state chosen.
    static renderByState(abbr){
        propertyCollectionDiv.innerHTML = ""
        this.all.map(propertyCard => {
            if(propertyCard.property.state.abbreviation === abbr ){
                propertyCard.render()
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
    render(){
        const card = document.createElement('div');
        card.className = "card";
        card.dataset.id = this.property.id;
        this.card = card;
        this.renderInnerHTML()
        this.constructor.container.append(card)
    }

    renderInnerHTML() {
        this.card.innerHTML =
        `
        <img src="${this.property.photo}" alt="Avatar" style="width:100%">
        <div class="cardcontainer">
          <b>${this.property.address}</b>
          <p>Rent: ${this.property.rent} 
          <span class="paid"><input type="checkbox" id="paid" name="paid" value="true">
          <label for="paid"> Mark as paid</label></span><br>
          Expenses: ${this.property.expenses}<br>
          </p> 
          <button type="button" class="edit">Edit Property</button>
        </div>
        `
    }

        //gets all "fetched" properties and generates "card" for each one. After that it initates buidling of a dropdown menu.
        static getAll() {
            api.getAllProperties().then((data) => {
                data.forEach((property) => new PropertyCard(property))
                const states = this.generateStateList()
                new StateDropdown(states);
            }
                
            );
        };
}