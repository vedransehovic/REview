class StateDropdown {
    constructor(states){
        this.states = states
        this.buildPulldown()
        this.attachEventListener()
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
    renderOption(state) {
        this.constructor.pulldownElement.innerHTML += `<option value="${state}">${state}</option>`;
    }
    
    // run through the array and call renderPulldown function on each element
    buildPulldown = () => {
        const select = document.createElement("select")
        this.select = select
        this.states.forEach((state) => {
           this.select.innerHTML += this.renderOption(state);
        });
    };

     attachEventListener() {
        this.select.addEventListener("change", this.somefunction) 
    }

    
}

