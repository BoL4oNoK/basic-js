module.exports = function countCats(matrix) {
  var cats = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (/^\^\^$/g.test(matrix[i][j])) { cats += 1; }
    }
  }

  return cats;
};