const tzIdeal = require("../data/ideal/index");

const ideal = (req, res) => {
  const { lang = "en" } = req.query;
  return res.status(200).json(tzIdeal(lang));
};

module.exports = ideal;
