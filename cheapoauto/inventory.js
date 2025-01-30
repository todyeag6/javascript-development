// inventory.js

document.addEventListener("DOMContentLoaded", () => {
    const typeSelect = document.getElementById("type");
    const carOptions = document.getElementById("car-options");
    const truckOptions = document.getElementById("truck-options");

    // Event listener to toggle car/truck-specific options
    typeSelect.addEventListener("change", () => {
        const selectedType = typeSelect.value;

        if (selectedType === "car") {
            carOptions.style.display = "block";
            truckOptions.style.display = "none";
        } else if (selectedType === "truck") {
            truckOptions.style.display = "block";
            carOptions.style.display = "none";
        } else {
            carOptions.style.display = "none";
            truckOptions.style.display = "none";
        }
    });

    // Optional: Add functionality to dynamically filter inventory
    const searchBar = document.querySelector(".search-bar input");
    const inventoryList = document.querySelector(".inventory-list");
    const carCards = inventoryList.querySelectorAll(".car-card");

    searchBar.addEventListener("input", () => {
        const searchValue = searchBar.value.toLowerCase();

        carCards.forEach((card) => {
            const carName = card.querySelector("h3").textContent.toLowerCase();

            if (carName.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
