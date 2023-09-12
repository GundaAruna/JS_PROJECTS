document.addEventListener("DOMContentLoaded", function () {
    const getCountryInfoButton = document.querySelector("#getCountryInfo");
    const countryInfoElement = document.querySelector(".country-info");

    getCountryInfoButton.addEventListener("click", function () {
        fetch("https://restcountries.com/v3/all")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network Issue");
                }
                return response.json();
            })
            .then((data) => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const countryData = data[randomIndex];
                const countryName = document.createElement("h2");
                countryName.textContent = countryData.name.common;
                const countryDetails = document.createElement("ul");
                countryDetails.innerHTML = `
                    <li>Capital: ${countryData.capital[0]}</li>
                    <li>Population: ${countryData.population.toLocaleString()}</li>
                    <li>Region: ${countryData.region}</li>
                    <li>Subregion: ${countryData.subregion}</li>
                    <li>Timezones: ${countryData.timezones.join(", ")}</li>
                `;
                countryInfoElement.innerHTML = "";
                countryInfoElement.appendChild(countryName);
                countryInfoElement.appendChild(countryDetails);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                countryInfoElement.textContent = "Failed to fetch country information.";
            });
    });
});
