function divisors(integer) {
  var a = [];
  for(x=2;x<integer;x++)if(integer % x == 0)a.push(x);
  if(a.length < 1)return integer+" is prime";
  return a;
};
