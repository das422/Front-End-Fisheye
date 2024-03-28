export const modalDisplay = () => {
    const contactBtn = document.querySelector(".contact_button");
    const contactModal = document.querySelector("#contact_modal");
    const closeModal = document.querySelector(".close");
    contactBtn.addEventListener("click", () => {
        contactModal.style.display = "flex";
        closeModal.focus();
    });
    closeModal.addEventListener("click", () => contactModal.style.display = "none");
};


export const formValidation = () => {

    const form = document.querySelector("#contact_modal");
    const firstName = document.querySelector(".formInput[name='firstname']");
    const lastName = document.querySelector(".formInput[name='lastname']");
    const email = document.querySelector(".formInput[name='email']");
    const message = document.querySelector(".formInput[name='message']");
    const error = document.querySelector(".error");
    const btnSubmit = document.querySelector(".submit");


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();
       
        
    });

    const checkInputs = () => {


    };

};

