// Return the nth triangular number
function triangular( n ) {
    var echo = 0;
    while(n>0){
      echo += n;
      n--;
    }
    return echo;
}
