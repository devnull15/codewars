function isPrime(num) {
  num = Math.abs(num);
  if(num == 0)return false;
  if(num == 1)return false;
  for(x=2;x<num;x++){
    if(num % x == 0)return false;
  }
  return true;
}
