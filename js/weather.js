const key = "d31eb6bba95554da0867103074d5bb27";

async function requestWeather(latitude, longitude, onAnswer) {
    let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + key + "&units=metric";


    await fetch(url)
        .then(data => {
            return data.json();
        })
        .then(res => {
            onAnswer(res);
        });
}


function alertWeather() {
    getLocation((coords) => {
        requestWeather(coords[0], coords[1], (answer) => {
        })
    })
}


async function getFastWeather(city, onAnswer) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=metric";

    await fetch(url)
        .then(data => {
            return data.json();
        })
        .then(res => {
            onAnswer(res);
        });
}