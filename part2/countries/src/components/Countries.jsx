const Countries = ({ countries, handler }) => {
  return (
    <>
      {countries.map((country) => (
        <div key={crypto.randomUUID()}>
          {country.name.common}{" "}
          <button onClick={() => handler(country.name.common)}>show</button>
        </div>
      ))}
    </>
  );
};

export default Countries;
