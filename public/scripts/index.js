const buttonSearch = document.querySelector("#page-home main a");
const modal = document.querySelector("#modal");
const close = document.querySelector("#modal .header a");

// Example card data (you could replace this with real data from an API or server)
const cardData = [
    {
        image: "/assets/card-pic-1.jpg",
        title: "Collecte de déchets électroniques",
        description: "Déposez vos appareils usagés pour un recyclage responsable."
    },
    {
        image: "/assets/card-pic-2.jpg",
        title: "Atelier de réparation et réutilisation",
        description: "Apprenez à réparer vos appareils pour éviter le gaspillage."
    },
    {
        image: "/assets/card-pic-3.jpg",
        title: "Sensibilisation au recyclage",
        description: "Découvrez l'importance du recyclage pour un avenir durable."
    }
];

// Function to create a card
function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.src = data.image;
    cardImage.alt = data.title;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = data.title;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = data.description;

    // Append everything
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    card.appendChild(cardImage);
    card.appendChild(cardContent);

    return card;
}

// Function to render all cards
function renderCards() {
    const cardsContainer = document.querySelector("#cards-container");

    // Clear any existing cards
    cardsContainer.innerHTML = "";

    // Loop through card data and create each card
    cardData.forEach(data => {
        const card = createCard(data);
        cardsContainer.appendChild(card);
    });
}

// Add event listeners for modal
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide");
});

close.addEventListener("click", () => {
    modal.classList.add("hide");
});

// Render the cards when the page loads
renderCards();
