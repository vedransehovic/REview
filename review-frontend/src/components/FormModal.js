class FormModal {
    static modal = document.getElementById("myModal");
    static closeBtn = document.getElementsByClassName("close")[0];

    constructor(photo, address, rent, expenses, paid) {
        this.photo = photo;
        this.address = address;
        this.rent = rent;
        this.expenses = expenses;
        this.paid = paid;
        this.constructor.closeBtn.addEventListener('click', this.closeModal)
        this.openModal();   
    }
    
    openModal = () => { //opens modal and attaches event listener on a submit button
        this.generateModalForm();
        this.constructor.modal.style.display = "block";
        const button = document.getElementById("button-modal")
        button.addEventListener("click", function(){
            console.log('Hello World')
        });
    }

    closeModal = () => {
        FormModal.modal.style.display = "none"
    }

    checkedOrNot = () => {
        if (this.paid === true) {
            return "checked";
        }
    }

    generateModalForm = () => {
        this.constructor.modal.querySelector('.form').innerHTML = 
        `
        <h1>EDIT PROPERTY</h1>
        <form>
            <label for="image">Image: </label>
            <input type="text" id="image" name="image" value="${this.photo}">
            <br><br>
            <label for="address">Address: </label>
            <input type="text" id="address" name="address" value="${this.address}">
            <br><br>
            <label for="rent">Rent: </label>
            <input type="text" id="rent" name="rent" value="${this.rent}">
            <br><br>
            <label for="expenses">Expenses: </label>
            <input type="text" id="expenses" name="expenses" value="${this.expenses}">
            <br><br>
            <label for="paid">Paid: </label>
            <input type="checkbox" id="paid" name="paid" value="${this.paid}" ${this.checkedOrNot()}><br>
            <br><br>
            <input type="button" id="button-modal" value="FAKE SUBMIT - PUSH">
        </form>
   
        `
    }
}


