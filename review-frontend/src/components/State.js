class StateDropdown {
    constructor(){
        this.buildPulldown()
    }

    // select pulldown object by id

    static pulldownElement = document.getElementById('states-pulldown');


    // get the list of unique states for the property list. 

    getStates() {
        let stateList = [];
        for (const element of PropertyCard.all) {
            if (!stateList.includes(element.property.state.abbreviation)) {
                stateList.push(element.property.state.abbreviation);
            }
        }
        return stateList;
    }


    // build individual elements of pulldown (insert them into the pulldown object)
    
    renderPulldown(element) {
        pulldownElement.innerHTML +=
        `<option value="${element.property.state.abbreviation}">${element.property.state.abbreviation}</option>`;
    }

    // run through the array and call renderPulldown function on each element
    buildPulldown = () => {
        console.log(this);
        this.getStates().forEach(function(element) {
            console.log(this);
            renderPulldown(element);
        })
    }
}