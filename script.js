
// let searchIcon = document.querySelector(".fa-magnifying-glass");
// let input = document.querySelector("input");
// let mikrofon = document.querySelector(".fa-microphone");


// searchIcon.addEventListener("click", () => {
//     input.style.width = "300px"
//     mikrofon.classList.remove("active")
// });

// mikrofon.addEventListener("click", () => {
//     input.style.width = "0px"
//     mikrofon.classList.add("active")
// });

// searchIcon.addEventListener("click", () => {
    
//     mikrofon.classList.toggle("active");
//     input.classList.toggle("active-width");
// });


// -------------------------- Tekrar -----------------------

// let searchIconEl = document.querySelector(".fa-magnifying-glass");
// let microphoneIconEl = document.querySelector(".fa-microphone");
// let searchInputEl = document.getElementById("searchInput");

// searchIconEl.addEventListener("click", () => {
//     microphoneIconEl.classList.toggle("active");
//     searchInputEl.classList.toggle("active-width");
// });


// let searchIconEl = document.querySelector(".fa-magnifying-glass");
// let searchInputEl = document.querySelector("#searchInput");
// let microphoneEl = document.querySelector(".fa-microphone");

// searchIconEl.addEventListener("click", () => {

//     searchInputEl.classList.toggle("active-width");
//     microphoneEl.classList.toggle("active");
// });

let searchIconEl = document.querySelector(".fa-magnifying-glass");
let microphoneEl = document.querySelector(".fa-microphone");
let searchInputEl = document.querySelector("input");

searchIconEl.addEventListener("click", () => {

    microphoneEl.classList.toggle("active");
    searchInputEl.classList.toggle("active-width");
    
});

// searchInputEl.addEventListener("click", () => {
//     searchInputEl.style.padding("150px 20px");
// });