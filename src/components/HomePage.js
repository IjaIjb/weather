import React, { useState } from "react";
import axios from "axios";

const CurrentWeather = ({ weatherData }) => (
  <div className=" text-white">
    <div className="md:flex justify-between">
      <div className="flex items-center md:justify-start justify-between md:gap-10">
        <div>
          <div className="md:text-[60px] text-[25px] font-light">
            {weatherData.current.condition.text}
          </div>
          <div className="md:text-[80px] text-[40px] font-bold">
            {weatherData.current.temp_c}°C
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <div>
              <h3 className="md:text-[35px] text-[25px] leading-[26px] font-[500]">
                {weatherData.location.name}
              </h3>
              <div className="text-[18px] md:text-[28px]">
                {weatherData.location.localtime}
              </div>
            </div>
            <img
              src={weatherData.current.condition.icon}
              className="md:w-16 md:h-16 w-9 h-9"
              alt="Weather Icon"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:mt-0 mt-5 gap-3 md:gap-5">
        <div className="text-lg flex  gap-3">
          <div>
            <svg
              width="40px"
              height="40px"
              className="text-white"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 13.8368H13C13 14.0298 13.1111 14.2056 13.2855 14.2884L13.5 13.8368ZM10.5 13.8368L10.7145 14.2884C10.8889 14.2056 11 14.0298 11 13.8368H10.5ZM13 6V13.8368H14V6H13ZM12 5C12.5523 5 13 5.44772 13 6H14C14 4.89543 13.1046 4 12 4V5ZM11 6C11 5.44772 11.4477 5 12 5V4C10.8954 4 10 4.89543 10 6H11ZM11 13.8368V6H10V13.8368H11ZM9 17C9 15.804 9.69984 14.7705 10.7145 14.2884L10.2855 13.3852C8.93522 14.0266 8 15.4036 8 17H9ZM12 20C10.3431 20 9 18.6569 9 17H8C8 19.2091 9.79086 21 12 21V20ZM15 17C15 18.6569 13.6569 20 12 20V21C14.2091 21 16 19.2091 16 17H15ZM13.2855 14.2884C14.3002 14.7705 15 15.804 15 17H16C16 15.4036 15.0648 14.0266 13.7145 13.3852L13.2855 14.2884Z"
                fill="white"
              />
              <path
                d="M12 17.5V15.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5 12.5H17.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5 10.5H17.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5 8.5H17.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5 6.5H19.5"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <h5>Feels like</h5>
            {weatherData.current.feelslike_c}°C
          </div>
        </div>

        <div className="text-lg flex  gap-3">
          <div>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.5C16.1012 21.5 19.5 18.4372 19.5 14.5714C19.5 12.1555 18.2672 9.71249 16.8732 7.70906C15.4698 5.69214 13.8515 4.04821 12.9778 3.21778C12.4263 2.69364 11.5737 2.69364 11.0222 3.21779C10.1485 4.04821 8.53016 5.69214 7.1268 7.70906C5.73282 9.71249 4.5 12.1555 4.5 14.5714C4.5 18.4372 7.8988 21.5 12 21.5Z"
                stroke="white"
              />
              <path
                d="M12 18C11.4747 18 10.9546 17.8965 10.4693 17.6955C9.98396 17.4945 9.54301 17.1999 9.17157 16.8284C8.80014 16.457 8.5055 16.016 8.30448 15.5307C8.10346 15.0454 8 14.5253 8 14"
                stroke="white"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div>
            <h5>Humidity</h5>
            {weatherData.current.humidity}%
          </div>
        </div>
        {/* <div className="text-lg">
                Humidity: {weatherData.current.humidity}%
              </div> */}

        <div className="text-lg flex  gap-3">
          <div>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="wind" transform="translate(-2 -2)">
                <path
                  id="primary"
                  d="M3,7h7a2,2,0,0,0,0-4"
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="primary-2"
                  data-name="primary"
                  d="M16,21a3,3,0,0,0,0-6H3"
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  id="primary-3"
                  data-name="primary"
                  x2="7"
                  transform="translate(3 19)"
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="primary-4"
                  data-name="primary"
                  d="M3,11H17.5a3.5,3.5,0,1,0,0-7"
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
          <div>
            <h5> Wind Speed</h5>
            {weatherData.current.wind_kph} km/h
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WeatherForecast = ({ forecastData }) => (
  <div className=" mt-7 text-white">
    <h2 className="text-2xl font-bold text-center">
      3-Day Forecast for {forecastData.location.name},{" "}
      {forecastData.location.country}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
      {forecastData.forecast.forecastday.map((day) => (
        <div
          key={day.date}
          className="p-4 bg-blue-600 rounded-lg shadow-lg text-center"
        >
          <h3 className="text-lg font-semibold">{day.date}</h3>
          <img
            src={day.day.condition.icon}
            alt={day.day.condition.text}
            className="mx-auto"
          />
          <p>{day.day.condition.text}</p>
          <p>
            Max: {day.day.maxtemp_c}°C | Min: {day.day.mintemp_c}°C
          </p>
        </div>
      ))}
    </div>
  </div>
);

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null); // New state for historical data
  const [historicalData1, setHistoricalData1] = useState(null); // New state for historical data
  const [historicalData2, setHistoricalData2] = useState(null); // New state for historical data
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
console.log(historicalData)
  const weatherApiKey = "8631408bbd50406cba0131620232505";
  const forecastApiUrl = "http://127.0.0.1:5000/forecast";

  const fetchWeatherData = async (location) => {
    try {
      setLoading(true);
      setError(null);
      const weatherResponse = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        { params: { key: weatherApiKey, q: location } }
      );
      setWeatherData(weatherResponse.data);

      const forecastResponse = await axios.get(forecastApiUrl, {
        params: { location },
      });
      setForecastData(forecastResponse.data);

      // Fetch Historical Data for 5 Days Ago
      const historicalResponse = await axios.get(
        `https://api.weatherapi.com/v1/history.json`,
        {
          params: {
            key: weatherApiKey,
            q: location,
            dt: new Date(new Date().setDate(new Date().getDate() - 3)) // 5 days ago
          }
        }
      );
      setHistoricalData(historicalResponse.data);

    } catch (err) {
      setError("Failed to fetch weather data. Please check the location.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (query.trim()) {
      setLoading(true);
      try {
        const [forecastResponse, weatherResponse] = await Promise.all([
          axios.get("http://127.0.0.1:5000/forecast", {
            params: { location: query },
          }),
          axios.get("https://api.weatherapi.com/v1/current.json", {
            params: { key: weatherApiKey, q: query },
          }),
        ]);
        setForecastData(forecastResponse.data);
        setWeatherData(weatherResponse.data);
        setError(null);

        // Fetch Historical Data for 5 Days Ago
        const historicalResponse = await axios.get(
          `https://api.weatherapi.com/v1/history.json`,
          {
            params: {
              key: weatherApiKey,
              q: query,
              dt: new Date(new Date().setDate(new Date().getDate() - 3)) // 5 days ago
            }
          }
        );
        setHistoricalData(historicalResponse.data);

        const historicalResponse1 = await axios.get(
          `https://api.weatherapi.com/v1/history.json`,
          {
            params: {
              key: weatherApiKey,
              q: query,
              dt: new Date(new Date().setDate(new Date().getDate() - 2)) // 5 days ago
            }
          }
        );
        setHistoricalData1(historicalResponse1.data);

        const historicalResponse2 = await axios.get(
          `https://api.weatherapi.com/v1/history.json`,
          {
            params: {
              key: weatherApiKey,
              q: query,
              dt: new Date(new Date().setDate(new Date().getDate() - 1)) // 5 days ago
            }
          }
        );
        setHistoricalData2(historicalResponse2.data);

      } catch (err) {
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="md:px-10 px-3">
      <div className="max-w-md mx-auto mt-7 p-6">
        <div className="relative w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full px-4 py-2 pl-10 text-[20px] text-white border-b bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter city or country"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 hover:w-7 hover:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.1-4.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {loading && <div className="mt-4 text-center">Loading...</div>}
      {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
      {weatherData && <CurrentWeather weatherData={weatherData} />}
      
        {/* Display historical weather data for 5 days ago */}
        {(historicalData && historicalData1 && historicalData2) && (
        <div className="mt-6 text-white">
          <h2 className="text-xl font-bold text-center">
            Weather Data for 2 Days Ago
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="p-4 mt-4 bg-blue-600 rounded-lg">
            <h3 className="text-lg font-semibold">Date: {historicalData.forecast.forecastday[0].date}</h3>
            <img
              src={historicalData.forecast.forecastday[0].day.condition.icon}
              alt={historicalData.forecast.forecastday[0].day.condition.text}
              className="mx-auto"
            />
            <p>{historicalData.forecast.forecastday[0].day.condition.text}</p>
            <p>
              Max: {historicalData.forecast.forecastday[0].day.maxtemp_c}°C | Min:{" "}
              {historicalData.forecast.forecastday[0].day.mintemp_c}°C
            </p>
          </div>

          <div className="p-4 mt-4 bg-blue-600 rounded-lg">
            <h3 className="text-lg font-semibold">Date: {historicalData1.forecast.forecastday[0].date}</h3>
            <img
              src={historicalData1.forecast.forecastday[0].day.condition.icon}
              alt={historicalData1.forecast.forecastday[0].day.condition.text}
              className="mx-auto"
            />
            <p>{historicalData1.forecast.forecastday[0].day.condition.text}</p>
            <p>
              Max: {historicalData1.forecast.forecastday[0].day.maxtemp_c}°C | Min:{" "}
              {historicalData1.forecast.forecastday[0].day.mintemp_c}°C
            </p>
          </div>

          <div className="p-4 mt-4 bg-blue-600 rounded-lg">
            <h3 className="text-lg font-semibold">Date: {historicalData2.forecast.forecastday[0].date}</h3>
            <img
              src={historicalData2.forecast.forecastday[0].day.condition.icon}
              alt={historicalData2.forecast.forecastday[0].day.condition.text}
              className="mx-auto"
            />
            <p>{historicalData2.forecast.forecastday[0].day.condition.text}</p>
            <p>
              Max: {historicalData2.forecast.forecastday[0].day.maxtemp_c}°C | Min:{" "}
              {historicalData2.forecast.forecastday[0].day.mintemp_c}°C
            </p>
          </div>

          </div>
        </div>
      )}
      {forecastData && <WeatherForecast forecastData={forecastData} />}
      
    
    </div>
  );
};



export default HomePage;
