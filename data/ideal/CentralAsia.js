const cityList = require("../../cityList");

const countryList = [
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan",
      fr: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Atyrau",
          en: "Atyrau Region",
          fr: "Oblys d'Atyraw"
        }
      }, // 06
      {
        title: {
          de: "Oblys Mangghystau",
          en: "Mangystau Region",
          fr: "Oblys de Mañğıstaw"
        }
      }, // 09
      {
        title: {
          de: "Oblys Westkasachstan",
          en: "West Kazakhstan Region",
          fr: "Oblys du Kazakhstan-Occidental"
        }
      } // 07
    ],
    zone: "Etc/GMT-3",
    flag: "KZ",
    cities: cityList.filter((city) => {
      if (city.country === "KZ") {
        if (city.adminCode === "06") return true;
        if (city.adminCode === "07") return true;
        if (city.adminCode === "09") return true;
        return false;
      }
      return false;
    })
  },
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Aqtöbe",
          en: "Aktobe Region",
          fr: "Oblys d'Aqtöbe"
        }
      }, // 04
      {
        title: {
          de: "Oblys Qostonai",
          en: "Kostanay Region",
          fr: "Oblys de Kostanaï"
        }
      }, // 13
      {
        title: {
          de: "Oblys Qysylorda",
          en: "Kyzylorda Region",
          fr: "Oblys de Qızılorda"
        }
      }, // 14
      {
        title: {
          de: "Baikonur",
          en: "Baykonyr",
          fr: "Baïkonour"
        }
      } // 18
    ],
    zone: "Etc/GMT-4",
    flag: "KZ",
    cities: cityList.filter((city) => {
      if (city.country === "KZ") {
        if (city.adminCode === "04") return true;
        if (city.adminCode === "13") return true;
        if (city.adminCode === "14") return true;
        if (city.adminCode === "18") return true;
        return false;
      }
      return false;
    })
  },
  {
    country: {
      de: "Kasachstan",
      en: "Kazakhstan"
    },
    subdiv: [
      {
        title: {
          de: "Oblys Akmola",
          en: "Akmola Region",
          fr: "Oblys d'Aqmola"
        }
      }, // 03
      {
        title: {
          de: "Oblys Almaty",
          en: "Almaty Region",
          fr: "Oblys d'Almaty"
        }
      }, // 01
      {
        title: {
          de: "Almaty",
          en: "Almaty",
          fr: "Almaty"
        }
      }, // 02
      {
        title: {
          de: "Astana",
          en: "Astana",
          fr: "Astana"
        }
      }, // 05
      {
        title: {
          de: "Oblys Ostkasachstan",
          en: "East Kazakhstan Region",
          fr: "Oblys du Kazakhstan-Oriental"
        }
      }, // 15
      {
        title: {
          de: "Oblys Schambyl",
          en: "Jambyl Region",
          fr: "Oblys de Jambıl"
        }
      }, // 17
      {
        title: {
          de: "Oblys Qaraghandy",
          en: "Karaganda Region",
          fr: "Oblys de Karaganda"
        }
      }, // 12
      {
        title: {
          de: "Oblys Nordkasachstan",
          en: "North Kazakhstan Region",
          fr: "Oblys du Kazakhstan-Septentrional"
        }
      }, // 16
      {
        title: {
          de: "Oblys Pawlodar",
          en: "Pavlodar Region",
          fr: "Oblys de Pavlodar"
        }
      }, // 11
      {
        title: {
          de: "Oblys Türkistan",
          en: "Turkistan Region",
          fr: "Oblys de Turkestan"
        }
      }, // 10
      {
        title: {
          de: "Schymkent",
          en: "Shymkent",
          fr: "Chimkent"
        }
      } // 1537272
    ],
    zone: "Etc/GMT-5",
    flag: "KZ",
    cities: cityList.filter((city) => {
      if (city.country === "KZ") {
        if (city.adminCode === "01") return true;
        if (city.adminCode === "02") return true;
        if (city.adminCode === "03") return true;
        if (city.adminCode === "05") return true;
        if (city.adminCode === "10") return true;
        if (city.adminCode === "11") return true;
        if (city.adminCode === "12") return true;
        if (city.adminCode === "15") return true;
        if (city.adminCode === "16") return true;
        if (city.adminCode === "17") return true;
        if (city.adminCode === "1537272") return true;
        return false;
      }
      return false;
    })
  },
  {
    country: {
      de: "Kirgisistan",
      en: "Kyrgyzstan",
      fr: "Kirghizistan"
    },
    zone: "Etc/GMT-5",
    flag: "KG",
    cities: cityList.filter((city) => city.country === "KG")
  },
  {
    country: {
      de: "Tadschikistan",
      en: "Tajikistan",
      fr: "Tadjikistan"
    },
    zone: "Etc/GMT-5",
    flag: "TJ",
    cities: cityList.filter((city) => city.country === "TJ")
  },
  {
    country: {
      de: "Turkmenistan",
      en: "Turkmenistan",
      fr: "Turkménistan"
    },
    zone: "Etc/GMT-4",
    flag: "TM",
    cities: cityList.filter((city) => city.country === "TM")
  },
  {
    country: {
      de: "Usbekistan",
      en: "Uzbekistan",
      fr: "Ouzbékistan"
    },
    zone: "Etc/GMT-4",
    flag: "UZ",
    cities: cityList.filter((city) => city.country === "UZ")
  }
];

module.exports = countryList;
