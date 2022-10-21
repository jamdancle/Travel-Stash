
//1.Declare the function 

function fetchData(city) {
    var apiKey = '549aae77a3dc08100f08e1988c47e726';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='
        + city + '&units=metric&appid='
        + apiKey)
        .then((response) => response.json())
        .then((data) => displayWeather(data));
    // console.log(data);

}

function displayWeather(myData) {
    //  console.log(myData);
    console.log("location:", myData.city.name);
    console.log("temperature:", myData.list[0].main.temp);
    console.log("description:", myData.list[0].weather[0].description);
    console.log("humidity:", myData.list[0].main.humidity);
    console.log("wind:", myData.list[0].wind.speed);

   // document.querySelector('#dynamCity').innerText = myData.city.name;
for(i=0;i < 40; i+=8) {
        document.querySelector('#weather' + i + ' .city span').innerText = myData.city.name;
        document.querySelector('#weather' + i + ' .temp span').innerText = myData.list[i].main.temp.toFixed(1);
        document.querySelector('#weather' + i + ' .description span').innerText = myData.list[i].weather[0].description;
        document.querySelector('#weather' + i + ' .humidity span').innerText = myData.list[i].main.humidity;
        document.querySelector('#weather' + i + ' .wind span').innerText = myData.list[i].wind.speed;
    }
    document.querySelector('#weather').style.visibility = 'visible';
}



function updateWeather() {
    //  var city = document.querySelector('#cityInput').value;

    var city = JSON.parse(localStorage.getItem('userLocation'));
    console.log('hello', city);
    fetchData(city);

}

window.addEventListener('load', updateWeather);


/*document.querySelector('#dynamcity').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        updateWeather();
    }
});
*/

