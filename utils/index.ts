import { WeatherResponse } from "../types";

export const fetchWeatherData = async (city: string): Promise<WeatherResponse | null> => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a70b28563f4244029fb140548242105&q=${city}&aqi=no
      `);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data as WeatherResponse;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };