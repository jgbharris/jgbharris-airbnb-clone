import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  label: country.name.common,
  value: country.cca2,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => {
    return formattedCountries;
  };
  const getByValue = (value: string) => {
    return formattedCountries.find((country) => country.value === value);
  };

  return { getAll, getByValue };
};

export default useCountries;
