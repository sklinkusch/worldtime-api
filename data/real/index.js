const Africa = require("./Africa");
const Antarctica = require("./Antarctica");

const tzlistRaw = [...Africa, ...Antarctica];

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
  return tzlistRaw.map((country) => {
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
};

module.exports = tzlist;
