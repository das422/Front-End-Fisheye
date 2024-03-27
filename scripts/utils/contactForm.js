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