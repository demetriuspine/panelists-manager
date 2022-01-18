const isDateValid = require('../../utils/isDateValid');

function watchedAtValidation(req, res, next) {
  const { watchedAt } = req.body.talk;

  if (!isDateValid(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next(); // https://expressjs.com/pt-br/guide/using-middleware.html e https://stackoverflow.com/questions/10695629/what-is-the-parameter-next-used-for-in-express
}

module.exports = watchedAtValidation;