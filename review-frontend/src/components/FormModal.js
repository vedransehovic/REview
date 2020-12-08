class FormModal {
    static modal = document.getElementById("myModal");
    static closeBtn = document.getElementsByClassName("close")[0];

    constructor(id, photo, address, rent, expenses, paid) {
        this.id = id;
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
        button.addEventListener("click", () => this.handleData());
    }

    handleData = () => {
        // const formData = new FormData(document.getElementById('modal-form'));
        // debugger
        // console.log(formData);
        const form = document.getElementById('modal-form');
        const formInfo = new FormData(form);
        formInfo.append('flag', 'true');
        PropertyCard.updateCard(this.id, formInfo);
        this.closeModal();



        // const address = document.getElementById('address');
        // const image = document.getElementById('image');
        // const rent = document.getElementById('rent');
        // const expenses = document.getElementById('expenses');
        // const paid = document.getElementById('paid');

        // const data = {
        //     address: address.value,
        //     image: image.value,
        //     rent: rent.value,
        //     expenses: expenses.value,
        //     paid: paid.value,
        //     flag: "set"
        // }
    }

   

    // renderPaid(card, property){
    //     const paid = property.paid;
    //     if (paid === true) {
    //        card.classList.add('green-background');
    //         return '✔'
    //     } else {
    //         // debugger
    //         // this.card.children[1].children[1].children[0].innerHTML =             
    //         card.classList.remove('green-background');
    //         return `
    //         <input type="checkbox" id="paid" name="paid" value="true">
    //         <label for="paid"> Mark as paid</label>
    //         `
    
    //     }
    // }

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
        <form id="modal-form">
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


