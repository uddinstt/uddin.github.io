document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded!");

    const btn = document.querySelector(".btn");
    btn.addEventListener("click", () => {
        alert("Welcome to my personal website!");
    });
});
