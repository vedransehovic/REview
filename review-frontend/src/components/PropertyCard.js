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

    //attaching event listener and corresponding function
    attachEventListener() {
        this.card.addEventListener('click', this.handleOnClick);
    }

    handleOnClick = (event) => {
        if (event.target.className == "edit") {
            const id = this.property.id;
            const photo = this.property.photo;
            const address = this.property.address;
            const paid = this.property.paid;
            const rent = this.property.rent;
            const expenses = this.property.expenses;
            new FormModal(id, photo, address, rent, expenses, paid);
        } else if (event.target.id == "paid"){
            const id = this.card.dataset.id
            //update the database (fetch update request) - call api function
            api.updatePaid(id).then(property => this.updatePaidHTML());
        }
    }

    updatePaidHTML(updateValue) {
        this.card.children[1].style.backgroundColor = "#ccffcc" ; //color the bottom part of the card green
        this.card.children[1].children[1].children[0].innerHTML = '✔'; //replace text with checkmark
    }

    //renders list of properties by state chosen.
    static renderByState(abbr){
        propertyCollectionDiv.innerHTML = ""
        this.all.map(propertyCard => {
            if(propertyCard.property.state.abbreviation === abbr ){
                propertyCard.render()
                propertyCard.attachEventListener();
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
        card.id = this.property.id;
        this.card = card;
        this.renderInnerHTML()
        this.constructor.container.append(card)
    }

    renderPaid(){
        const paid = this.property.paid;
        if (paid === true) {
           this.card.classList.add('green-background');
            return '✔'
        } else {
            // debugger
            // this.card.children[1].children[1].children[0].innerHTML =             
            
            return `
            <input type="checkbox" id="paid" name="paid" value="true">
            <label for="paid"> Mark as paid</label>
            `
    
        }
    }

    renderInnerHTML() {
        this.card.innerHTML =
        `
        <img src="${this.property.photo}" alt="Avatar" style="width:100%">
        <div class="cardcontainer">
          <b>${this.property.address}</b>
          <p>Rent: ${this.property.rent} 
          <span class="paid">
                ${this.renderPaid()}
          </span><br>
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