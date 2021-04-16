const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
    // destructure properties
    const { cityDetail, weather } = data;
    console.log(data);

    // update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDetail.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="my-4 display-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    // remove the d-none class if presents
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    //update the weather condition icons
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // update day/night image 
    timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);

}

const updateCity = async (city) => {

    const cityDetail = await getCity(city);
    const weather = await getWeather(cityDetail.Key);

    return { cityDetail, weather };
};

cityForm.addEventListener('submit', e => {
    // prevent refreshing the page
    e.preventDefault();

    // get city
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the UI with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

});
