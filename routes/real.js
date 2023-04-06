const tzReal = require("../data/real/index");

const real = (req, res) => {
  const { lang = "en" } = req.query;
  return res.status(200).json(tzReal(lang));
};

module.exports = real;
