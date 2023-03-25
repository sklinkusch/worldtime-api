const Africa = require("./Africa");
const Antarctica = require("./Antarctica");
const Australia = require("./Australia");
const Canada = require("./Canada");
const Caribbean = require("./Caribbean");
const CentralAmerica = require("./CentralAmerica");
const CentralAsia = require("./CentralAsia");
const EastAsia = require("./EastAsia");

const tzlistRaw = [
  ...Africa,
  ...Antarctica,
  ...Australia,
  ...Canada,
  ...Caribbean,
  ...CentralAmerica,
  ...CentralAsia,
  ...EastAsia
];

const tzlist = (lang) => {
  let language;
  switch (lang) {
    case "de":
    case "en":
    case "fr":
      language = lang;
      break;
    default:
      language = "en";
  }
  const languageTzones = tzlistRaw.map((country) => {
    country.country = country.country[language];
    if (country.subdiv) {
      country.subdiv = country.subdiv.map((subdivision) => {
        const { title, extra = undefined } = subdivision;
        const newDiv = {};
        if (typeof title === "string") {
          newDiv.title = title;
        } else {
          newDiv.title = title[language];
        }
        if (extra) {
          if (typeof extra === "string") {
            newDiv.extra = extra;
          } else {
            newDiv.extra = extra[language];
          }
        }
        return newDiv;
      });
    }
    return country;
  });
  const sortedTzList = languageTzones.sort((a, b) => {
    const { country: aCountry, zone: aZone } = a;
    const { country: bCountry, zone: bZone } = b;
    if (aCountry < bCountry) return -1;
    if (bCountry < aCountry) return +1;
    if (aZone < bZone) return -1;
    if (bZone < aZone) return +1;
    return 0;
  });
  return sortedTzList;
};

module.exports = tzlist;
