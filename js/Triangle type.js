function triangleType(a, b, c){
  var o = {};
  o['0'] = Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)) * (180 / Math.PI);
  o['1'] = Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c)) * (180 / Math.PI);
  o['2'] = Math.acos((Math.pow(c, 2) + Math.pow(a, 2) - Math.pow(b, 2)) / (2 * c * a)) * (180 / Math.PI);
  for(x=0;x<Object.keys(o).length;x++){
    if(o[x] == 180||o[x] == 0||isNaN(o[x]))return 0;
    if(o[x] == 90)return 2;
    if(o[x] > 90)return 3;
  }
  return 1;
}
