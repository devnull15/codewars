function sumStrings(a,b) { 
  a = a.split('').reverse();
  b = b.split('').reverse();
  var length = 0;
  var c = [];
  var echo = "";
  a.length > b.length ? length = a.length : length = b.length;
  
  for(x=0;x<length;x++){
    if(isNaN(a[x]))a[x] = 0;
    if(isNaN(b[x]))b[x] = 0;
    c[x]=Number(a[x])+Number(b[x]);
    //console.log( c[x]);
    if(c[x] > 9 && length-1 !== x){
      c[x] = c[x].toString();      
      if(isNaN(a[x+1]))a[x+1] = 0;
      a[x+1] = Number(a[x+1]) + Number(c[x].substr(0,1));
      c[x] = c[x].substr(1);      
    }
    c[x] = c[x].toString();
  }
  c.reverse();
  
  var chkzero = false;
  for(x=0;x<c.length;x++){
    if(chkzero == true || c[x] > 0){
      echo += c[x];
      chkzero = true;
    }
  }
  //console.log(c);
  
  return echo;
}
