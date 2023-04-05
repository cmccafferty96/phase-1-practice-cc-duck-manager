// write your code here!

const url = ("http://localhost:3000/ducks");
let duck_nav = document.getElementById("duck-nav");
let image = document.getElementById("duck-display-image");
let likeButton = document.getElementById("duck-display-likes");
let duck_name = document.getElementById("duck-display-name");
let form = document.getElementById("new-duck-form");

fetch(url) 
.then((response) => response.json())
.then(data => renderDucks(data));

function renderDucks(ducks) {
    ducks.forEach((duck) => {
        let duck_image = document.createElement("img");
        duck_image.src = duck.img_url;
        duck_nav.append(duck_image);
        duck_image.addEventListener("click", () => {
            duck_name.textContent = duck.name;
            image.src = duck.img_url;
            likeButton.textContent = duck.likes;
        })
    })
}

likeButton.addEventListener("click", () => {
    likeButton.textContent++;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(
        parseInt(e.target.likes.value) + parseInt(likeButton.textContent)
        );

        let newLikes =
        parseInt(e.target.likes.value) + parseInt(likeButton.textContent)

        likeButton.textContent = newLikes;
})

