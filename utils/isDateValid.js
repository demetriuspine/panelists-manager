function isDateValid(date) {
  const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i; // https://www.regextester.com/99555
  return regexDate.test(date);
}

console.log(isDateValid('31/12/2020'));

module.exports = isDateValid;