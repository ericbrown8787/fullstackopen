const CountryInfo = ({ country }) => {
  let id = -1;
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={crypto.randomUUID()}>{language}</li>
        ))}
      </ul>
      <div style={{ fontSize: 150 }}>{country.flag}</div>
    </div>
  );
};

export default CountryInfo;
