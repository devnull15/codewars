function convertToMixedNumeral(parm){
  var x = parm.split('/');
  var remain = x[0] % x[1];
  var div;
  x[0] < 0 ? div = Math.ceil(x[0] / x[1]) : div = Math.floor(x[0] / x[1]);
  
  if(remain == 0)return ''+div;
  if(div ==0)return remain+'/'+x[1];
  return div+' '+Math.abs(remain)+'/'+x[1];
}
