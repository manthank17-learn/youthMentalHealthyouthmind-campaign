document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#year");
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});
