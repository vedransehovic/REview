class StateDropdown {
    constructor(states){
        this.states = states
        this.buildPulldown()
        this.attachEventListener()
    }

    // select pulldown object by id  (changed this to prototype method because something required it to be class method and other things to be instance method.Prototype works for both.)

    //static pulldownElement = document.getElementById('states-pulldown');
    


    // build individual elements of pulldown (insert them into the pulldown object)
    renderOption(state) {
        //this.constructor.pulldownElement.innerHTML += `<option value="${state}">${state}</option>`;
        this.dropdown().innerHTML += `<option value="${state}">${state}</option>`;
    }
    
    // run through the array and call renderPulldown function on each element
    buildPulldown = () => {
        const select = document.createElement("select")
        this.select = select
        this.states.forEach((state) => {
           this.select.innerHTML += this.renderOption(state);
        });
    };

    //event listener that listens for the change on the menu and initates rendering of the states according to the selection 
     attachEventListener() {
        //this.select.addEventListener("change", stateValue);
        this.dropdown().addEventListener("change", this.stateValue);
    }

    //reads the value of the "Select" element of the pulldown (this.value)
    //pass that value to the "renderByState" function in the PropertyCard class
    stateValue() {
        PropertyCard.renderByState(this.value);
    }
    
}

//does this need to be outside of function or can it be defined  somewhere better?
StateDropdown.prototype.dropdown = function () {
    let pulldownElement = document.getElementById('states-pulldown');
    return pulldownElement;
}

