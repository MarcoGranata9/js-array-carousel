const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]
console.log(imgArray);
const carousel = document.querySelector(".items");
console.log(carousel);


let carouselString = "";

for (let i = 0; i < imgArray.length; i++) {
    const currentImg = imgArray[i];
    console.log(currentImg);
    
    carouselString += `<div class="item"><img src="${currentImg}" alt=""></div>`;
    console.log(carouselString);    
}

carousel.innerHTML += carouselString



// Stato iniziale
const carouselStringArray = document.querySelectorAll(".item")
console.log(carouselStringArray);
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

let currentActive = 0

carouselStringArray[currentActive].classList.add("active")
console.log(currentActive)  

// Bottoni
nextBtn.addEventListener("click", function(){
    if (currentActive < carouselStringArray.length - 1) {
        carouselStringArray[currentActive].classList.remove("active")
        currentActive++
        carouselStringArray[currentActive].classList.add("active")
    }
})

prevBtn.addEventListener("click", function(){
    if (currentActive > 0) {
        carouselStringArray[currentActive].classList.remove("active")
        currentActive--
        carouselStringArray[currentActive].classList.add("active")
    }
})


  


