function isEmailValid(emailToValidate) { // adaptado do comentário do michael em https://trybecourse.slack.com/archives/C023YHXAEGM/p1634319081263300
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(emailToValidate);
}

module.exports = isEmailValid;