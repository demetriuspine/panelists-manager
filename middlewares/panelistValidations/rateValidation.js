function rateValidation(req, res, next) {
  const { rate } = req.body.talk;

  const convertedRate = Number(rate);

  if (convertedRate < 1
  || convertedRate > 5
  || Number.isInteger(convertedRate) === false // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
  || Number.isNaN(convertedRate)) { // https://www.w3schools.com/jsref/jsref_isnan_number.asp
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }

  next();
}

module.exports = rateValidation;