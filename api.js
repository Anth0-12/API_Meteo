// Clé api
const apiKey = "affb8f8dafaba84a265d75f333ecff1d";

// Fonction d'appel de l'API openweather avec ville en paramètre de fonction
let appelleApi = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    // Traitez les données renvoyées par l'API
    // On récupere les éléments HTML pour afficher les données de l'API
            document.getElementById("ville").innerHTML = data.name;
            document.getElementById("temperature").innerHTML = '<i class="fa-solid fa-temperature-low fa-xl"></i> <br>' + data.main.temp + '°C';
            document.getElementById("condition").innerHTML = '<i class="fa-solid fa-cloud fa-xl"></i> <br>' + data.weather[0].description;
            document.getElementById("vent").innerHTML = '<i class="fa-solid fa-wind fa-xl"></i> <br>' + data.wind.speed + "km/h";
            document.getElementById("humidite").innerHTML = '<i class="fa-solid fa-droplet fa-xl"></i> <br>' + data.main.humidity + '%';    
    })
    .catch(error => {
    // Gérez l'erreur en conséquence
    console.error(error);
    });
};

// Ecouteur d'événement sur la soumission du formulaire
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let inputVille = document.getElementById("inputVille").value;

    appelleApi(inputVille);
});

// Appel par défaut de l'API
appelleApi('Méricourt');