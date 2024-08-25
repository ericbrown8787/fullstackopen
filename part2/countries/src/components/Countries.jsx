const Countries = ({ countries }) => {
  return (
    <>
      {countries.map((country) => (
        <div key={crypto.randomUUID()}>{country.name.common}</div>
      ))}
    </>
  );
};

export default Countries;
