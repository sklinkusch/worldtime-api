const Africa = require("./Africa");
const Antarctica = require("./Antarctica");
const Australia = require("./Australia");
const Canada = require("./Canada");
const Caribbean = require("./Caribbean");
const CentralAmerica = require("./CentralAmerica");
const CentralAsia = require("./CentralAsia");
const EastAsia = require("./EastAsia");
const Europe = require("./Europe");
const Indonesia = require("./Indonesia");
const MiddleEast = require("./MiddleEast");
const Oceania = require("./Oceania");
const Russia = require("./Russia");
const SouthAmerica = require("./SouthAmerica");
const SouthAsia = require("./SouthAsia");
const SouthEastAsia = require("./SouthEastAsia");
// const UnitedStates = require("./UnitedStates");

const tzlistRaw = [
  ...Africa,
  ...Antarctica,
  ...Australia,
  ...Canada,
  ...Caribbean,
  ...CentralAmerica,
  ...CentralAsia,
  ...EastAsia,
  ...Europe,
  ...Indonesia,
  ...MiddleEast,
  ...Oceania,
  ...Russia,
  ...SouthAmerica,
  ...SouthAsia,
  ...SouthEastAsia
  // ...UnitedStates
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
    let newCountry = Object.assign({}, country);
    newCountry.country = country.country[language];
    if (country.subdiv) {
      newCountry.subdiv = country.subdiv.map((subdivision) => {
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
    return newCountry;
  });
  const sortedTzList = languageTzones.sort((a, b) => {
    const { country: aCountry, zone: aZone } = a;
    const { country: bCountry, zone: bZone } = b;
    const aToBCountry = localeSort(aCountry, bCountry);
    if (aToBCountry !== 0) return aToBCountry;
    const aToBZone = localeSort(aZone, bZone);
    return aToBZone;
  });
  return sortedTzList;
};

function localeSort(a, b) {
  const aToB = a.localeCompare(b, "en", { sensitivity: "base" });
  if (aToB < 0) {
    return -1;
  } else if (aToB > 0) {
    return +1;
  } else {
    return 0;
  }
}

module.exports = tzlist;
