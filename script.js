
searchBtn.addEventListener('click', ()=>{
    
    cityName = document.getElementById("city").value
     apiKey= 'efcde0cc34d5a602702f8aee2c3d234a'
     const Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    


    if (!cityName){

        error.style.display = "block"

        
        setTimeout(() => {
            error.style.display = "none"
        }, 1000);

    }

    else{

        fetch(Url)
        .then ((response)=> response.json())

        .then((data)=>{


            result.innerHTML = `

            <div class="weather-container">
            <div class="weather-card">
                <h2 class="city-name">${data.name}</h2>
                <div class="weather-info">
                    <p class="temperature">${data.main.temp}°C</p>
                    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon" class="weather-icon">
                    <p class="condition">${data.weather[0].description}</p>
    
                    <div class="measurement">
                        <p>long:${data.coord.lon}°</p>
                        <p>lat: ${data.coord.lat}°</p>
                    </div>
    
                </div>
            </div>
        </div>

            `


        })


        .catch((error)=>{
  
            if(cityName.length==0){
    result.innerHTML= `
    <h3> The input field cannot be empty </h3>
    `              
            }

            else{
                result.innerHTML = `<h3> Please enter a valid country name. </h3>`
    
    setTimeout(() => {
        
        result.style.display="none"
    }, 3000);
    
            }

        })


    }

})