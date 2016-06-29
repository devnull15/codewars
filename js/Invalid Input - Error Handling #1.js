function getCount(words) {
  var a = [];
  var v = "aeiou".split("");
  var c = "bcdfghjklmnpqrstvwxyz".split("");
  var vcnt = 0;
  var ccnt = 0;
  
  if (typeof words === 'string'){
   a = words.toLowerCase().split("");
  }
  
  a.forEach(function(x) {
    if(v.indexOf(x) > -1){
      vcnt++;
    }
    if(c.indexOf(x) > -1){
      ccnt++;
    }
  });
  
  return {vowels:vcnt,consonants:ccnt}
}
