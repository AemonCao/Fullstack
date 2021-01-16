import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showButtonClickHandler = () => {
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
