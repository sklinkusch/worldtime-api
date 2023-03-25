const cityListRaw = require("./cities500K.json");
const cPopulation = require("./population");

const cityList = cityListRaw.filter((city) => {
  const { country, population } = city;
  const countryPopulation = cPopulation[country];
  const minPopulation = 0.005 * countryPopulation;
  if (population >= minPopulation) {
    return true;
  }
  return false;
});

module.exports = cityList;
