/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var total = 0;  
  var countTriangles = 0;
     for ( var i = 0; i < preferences.length; i++){ 
      var first = preferences [i];
      var second = preferences [first - 1];
      var third = preferences [second - 1];
      if (third === i + 1){
        countTriangles++;
      }
      if (countTriangles == 3){
        total++;
        countTriangles = 0;
      }
     }
    return total;
};