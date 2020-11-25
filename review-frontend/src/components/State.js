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
    renderPulldown(state) {
        this.constructor.pulldownElement.innerHTML += `<option value="${state}">${state}</option>`;
    }
    
    // run through the array and call renderPulldown function on each element
    buildPulldown = () => {
        this.getStates().forEach((state) => {
            this.renderPulldown(state);
        });
    };
}

