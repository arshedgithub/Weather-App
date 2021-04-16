const key = 'rfOSGtHuJ3nKkU28BHb0Sh6JugUkALSN';

const getWeather = async (locationID) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationID}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

const getCity = async (city) => {
   const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
   const query = `?apikey=${key}&q=${city}`;

   const response = await fetch(base + query);
   const data = await response.json();

   return data[0];
};
