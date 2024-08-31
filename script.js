const imgContainer = document.querySelector(".img-container");
const button = document.querySelector(".btn");

button.addEventListener("click", ()=>{

    updateImg();
});

function updateImg(){
    const newImg = document.createElement("img");
    const count = Math.floor(Math.random()*1000);
    newImg.src = `https://picsum.photos/200/300?random=${count}`;
    imgContainer.appendChild(newImg);
}