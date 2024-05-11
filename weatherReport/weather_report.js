function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey='80638ef1813f5cb71c6601a1688e2770';
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;;

    fetch(apiUrl)
        .then(response=>response.json())
        .then(data=>{
            const weatherInfo=document.getElementById('weatherInfo');
            weatherInfo.innerHTML=`<h2>Weather in ${data.name}</h2>
            <p>Temperature:${data.main.temp} &#8451;</p>
            <p>Wheather: ${data.weather[0].description}</p>`;
        })

}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

