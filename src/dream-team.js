module.exports = function createDreamTeam( members ) {
  res = false;
  if (Array.isArray(members)) {
    if (members.length == 0) throw 'Not implemented';
    var arrTeam = [];
    members.sort().forEach(element => {
      if ( (typeof element == 'string') && ( /^[a-z _]+$/i.test(element) ) ) {
        element = element.replace(/^( )+/, "").substr(0,1);
        arrTeam.push(element.toUpperCase());
      }
    });
    res = arrTeam.sort().join('');
  }
  
  return res;
};