exports.replaceConsonants = function (string, replace) {
  const regExp = new RegExp(/[^aeiou]/, 'ig');
  return string.replace(regExp, replace);
};

exports.replaceVowels = function (string, replace) {
  const regExp = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');
  return string.replace(regExp, replace);
};