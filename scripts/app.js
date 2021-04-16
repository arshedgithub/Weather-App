const cityForm = document.querySelector('form');

const updateCity = async (city) => {

    const cityDetail = getCity(city);
    const weather = getWeather(cityDetail.Key);

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
        .then(data => console.log(data))
        .catch(err => console.log(err));

});
