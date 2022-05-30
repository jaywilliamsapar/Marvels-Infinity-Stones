
//----  Movement Animation to Happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// ----- Items

const title = document.querySelector(".title");
const stones = document.querySelector(".stones img");
const description = document.querySelector(".info h3");


//---   Moving Animation Event

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//---   Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    //Pop Out Effect
    title.style.transform = "translateZ(200px)";
    stones.style.transform = "translateZ(35px) rotateZ(-150deg)";
});

//---   Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.75s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //PopBack Effect
    stones.style.transform = "translateZ(85px)";
    stones.style.transform = "translateZ(0px) rotateZ(0deg)";
});

