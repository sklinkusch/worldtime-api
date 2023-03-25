const cityList = require("../../cityList");

const countryList = [
  {
    country: {
      de: "Volksrepublik China",
      en: "People's Republic of China",
      fr: "République populaire de Chine"
    },
    zone: "Asia/Shanghai",
    flag: "CN",
    cities: cityList.filter(
      (city) => city.country === "CN" && city.tz === "Asia/Shanghai"
    )
  },
  {
    country: {
      de: "Volksrepublik China",
      en: "People's Republic of China",
      fr: "République populaire de Chine"
    },
    subdiv: [{ title: "Xinjiang" }],
    zone: "Asia/Urumqi",
    flag: "CN",
    cities: cityList.filter(
      (city) => city.country === "CN" && city.tz === "Asia/Urumqi"
    )
  },
  {
    country: {
      de: "Hongkong (VR China)",
      en: "Hong Kong (PR of China)",
      fr: "Hong Kong (RP de Chine)"
    },
    zone: "Asia/Hong_Kong",
    flag: "HK",
    cities: cityList.filter(
      (city) => city.country === "HK" && city.tz === "Asia/Hong_Kong"
    )
  },
  {
    country: {
      de: "Japan",
      en: "Japan",
      fr: "Japon"
    },
    zone: "Asia/Tokyo",
    flag: "JP",
    cities: cityList.filter(
      (city) => city.country === "JP" && city.tz === "Asia/Tokyo"
    )
  },
  {
    country: {
      de: "Macau (VR China)",
      en: "Macau (PR of China)",
      fr: "Macao (RP de Chine)"
    },
    zone: "Asia/Macau",
    flag: "MO",
    cities: cityList.filter(
      (city) => city.country === "MO" && city.tz === "Asia/Macau"
    )
  },
  {
    country: {
      de: "Mongolei",
      en: "Mongolia",
      fr: "Mongolie"
    },
    subdiv: [
      { title: "Arkhangai" },
      { title: "Bayankhongor" },
      { title: "Bulgan" },
      { title: "Darkhan-Uul" },
      { title: "Dornogovi" },
      { title: "Dundgovi" },
      { title: "Govisümber" },
      { title: "Khentii" },
      { title: "Khövsgöl" },
      { title: "Orkhon" },
      { title: "Selenge" },
      { title: "Töv" },
      { title: "Ömnögovi" },
      { title: "Övörkhanghai" }
    ],
    zone: "Asia/Ulaanbaatar",
    flag: "MN",
    cities: cityList.filter(
      (city) => city.country === "MN" && city.tz === "Asia/Ulaanbaatar"
    )
  },
  {
    country: {
      de: "Mongolei",
      en: "Mongolia",
      fr: "Mongolie"
    },
    subdiv: [{ title: "Dornod" }, { title: "Sükhbaatar" }],
    zone: "Asia/Choibalsan",
    flag: "MN",
    cities: cityList.filter(
      (city) => city.country === "MN" && city.tz === "Asia/Choibalsan"
    )
  },
  {
    country: {
      de: "Mongolei",
      en: "Mongolia",
      fr: "Mongolie"
    },
    subdiv: [
      { title: "Bayan-Ölgii" },
      { title: "Govi-Altai" },
      { title: "Khovd" },
      { title: "Uvs" },
      { title: "Zavkhan" }
    ],
    zone: "Asia/Hovd",
    flag: "MN",
    cities: cityList.filter(
      (city) => city.country === "MN" && city.tz === "Asia/Hovd"
    )
  },
  {
    country: {
      de: "Nordkorea",
      en: "North Korea",
      fr: "Corée du Nord"
    },
    zone: "Asia/Pyongyang",
    flag: "KP",
    cities: cityList.filter(
      (city) => city.country === "KP" && city.tz === "Asia/Pyongyang"
    )
  },
  {
    country: {
      de: "Südkorea",
      en: "South Korea",
      fr: "Corée du Sud"
    },
    zone: "Asia/Seoul",
    flag: "KR",
    cities: cityList.filter(
      (city) => city.country === "KR" && city.tz === "Asia/Seoul"
    )
  },
  {
    country: {
      de: "Taiwan",
      en: "Taiwan",
      fr: "Taïwan"
    },
    zone: "Asia/Taipei",
    flag: "TW",
    cities: cityList.filter(
      (city) => city.country === "TW" && city.tz === "Asia/Taipei"
    )
  }
];

module.exports = countryList;
