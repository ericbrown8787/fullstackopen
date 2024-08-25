import { useEffect, useState } from "react";
import axios from "axios";
import countriesService from "./services/countries";
import Filter from "./components/Filter";
import CountryInfo from "./components/CountryInfo";
import Countries from "./components/Countries";
function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    countriesService
      .getAll()
      .then((initialCountries) => setCountries(initialCountries));
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleShowSingleCountry = (name) => {
    setFilter(name);
  };
  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <div>
        {countriesToShow.length === 0 ? (
          "No matches found"
        ) : countriesToShow.length === 1 ? (
          <CountryInfo country={countriesToShow[0]} />
        ) : countriesToShow.length <= 10 ? (
          <Countries
            countries={countriesToShow}
            handler={handleShowSingleCountry}
          />
        ) : (
          "Too many matches, specify another filter"
        )}
      </div>
    </div>
  );
}

export default App;
