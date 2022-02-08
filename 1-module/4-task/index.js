function checkSpam(str) {
  let spam = str.toLowerCase();
  if (spam.includes('1xBet') || spam.includes('XXX')) {
    return true;
  } else {
    return false;
  }
}
