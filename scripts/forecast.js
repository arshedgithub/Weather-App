class Forecast {
    constructor() {
        this.key = 'bHsPQaGKOT45WqY8E1W2NAmriK1w40Dc';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
    }
    async updateCity(city) {
        const cityDetail = await this.getCity(city);
        const weather = await this.getWeather(cityDetail.Key);
        return { cityDetail, weather };
    }
    async getWeather(locationID) {
        const query = `${locationID}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }
};


