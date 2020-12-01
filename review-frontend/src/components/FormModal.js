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
    
    openModal() {
        debugger
        this.generateModalForm();
        this.constructor.modal.style.display = "block";
    }

    closeModal() {
        FormModal.modal.style.display = "none"
    }

    generateModalForm() {
        FormModal.modal.innerHTML = 
        `
        ${this.address}
        `
    }
}


