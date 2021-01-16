import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState();
  const api_key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [api_key, city]);
  return !!weather ? (
    <div>
      <h3>
        Weather in {weather.location.name} {weather.location.country}
      </h3>
      <b>temperature:</b>
      <span>{weather.current.temperature} Celcius</span>
      <br />
      {weather.current.weather_icons.map((icon) => (
        <img key={icon} src={icon} alt={icon} />
      ))}
      <br />
      <b>wind:</b>
      <span>
        {weather.current.wind_speed} mph dir {weather.current.wind_dir}
      </span>
    </div>
  ) : (
    <p>loadding</p>
  );
};

const Country = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showButtonClickHandler = () => {
    console.log(country);
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <span>{country.name}</span>
      <button onClick={showButtonClickHandler}>
        {showInfo ? "hide" : "show"}
      </button>
      {showInfo ? (
        <>
          <h1>{country.name}</h1>
          <div>capital {country.capital}</div>
          <div>population {country.population}</div>
          <h3>languages</h3>
          <ul>
            {country.languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <img src={country.flag} alt={country.name} />
          <Weather city={!!country.capital ? country.capital : country.name} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

const Countries = ({ countries }) => {
  if (countries.length > 100) {
    return <div>Too mant matches, specify another filter</div>;
  } else if (countries.length > 1 && countries.length <= 100) {
    return countries.map((country) => (
      <Country key={country.name} country={country} />
    ));
  } else if (countries.length === 1) {
    const country = countries[0];
    return <Country country={country} />;
  } else {
    return <div>404</div>;
  }
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountryName, setFilterCountryName] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const onFilterCountryNameInputChange = (event) => {
    setFilterCountryName(event.target.value);
  };

  const filterCountries = countries.filter(
    (country) =>
      country.name.toUpperCase().indexOf(filterCountryName.toUpperCase()) > -1
  );

  return (
    <div>
      <div>
        find countries
        <input onChange={onFilterCountryNameInputChange} />
      </div>
      <Countries countries={filterCountries} />
    </div>
  );
};

export default App;
