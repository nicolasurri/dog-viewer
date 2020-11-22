const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector(".breeds");

fetch(BREEDS_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        //console.log(data);
        const breedsObject = data.message
        const breedsArray = Object.keys(breedsObject);

        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement("option");
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })

select.addEventListener("change", function(event) {
    //console.log(event.target.value);
    getDoggo(`https://dog.ceo/api/breed/${event.target.value}/images/random`);
})

const img = document.querySelector(".dog-img")

const spinner = document.querySelector(".spinner");

function getDoggo(url) {
    // Show spinner
    spinner.classList.add("show");
    img.classList.remove("show");

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            img.src = data.message;
            // This option is just fine, but in this point the API gives the URL and not the IMG itself
            /* spinner.classList.remove("show");
            img.classList.add("show"); */
        })
}

// For doing a cleaner img switch

img.addEventListener("load", function() {
    spinner.classList.remove("show");
    img.classList.add("show");
})

// Start with Affenpinscher

getDoggo(`https://dog.ceo/api/breed/affenpinscher/images/random`);