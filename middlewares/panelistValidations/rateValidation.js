function rateValidation(req, res, next) {
  const { rate } = req.body.talk;

  if (Number(rate) < 1
  || Number(rate) > 5
  || Number.isInteger(Number(rate)) === false // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
  || Number.isNaN(Number(rate))) { // https://www.w3schools.com/jsref/jsref_isnan_number.asp
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }

  next();
}

module.exports = rateValidation;