export const modalDisplay = () => {
    const contactBtn = document.querySelector(".contact_button");
    const contactModal = document.querySelector("#contact_modal");
    const closeModal = document.querySelector(".close");
    contactBtn.addEventListener("click", () => {
        contactModal.style.display = "flex";
        closeModal.focus();
    });
    closeModal.addEventListener(
        "click",
        () => (contactModal.style.display = "none")
    );
};

export const formValidation = () => {
    const form = document.querySelector("#contact_modal");
    const firstName = document.querySelector("#firstname");
    const lastName = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const message = document.querySelector("#text");
    const contactModal = document.querySelector("#contact_modal");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (
            firstName.value === "" ||
      lastName.value === "" ||
      email.value === "" ||
      message.value === ""
        ) {
            alert("Veuillez remplir tout les champs");
        } else {
            console.log("firstName", ":" + "", firstName.value);
            console.log("lastName", ":" + "", lastName.value);
            console.log("email", ":" + "", email.value);
            console.log("message", ":" + "", message.value);
            contactModal.style.display = "none";
        }
    });
};
