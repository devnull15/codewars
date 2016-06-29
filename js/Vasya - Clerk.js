function tickets(peopleInLine){
  var change = {25:0,50:0,100:0};
  var echo = "YES";
  
  peopleInLine.forEach(function(x){
    
    //echo = "NO";
    if(x == '50') change[25] > 0 ? change[25]-- : echo="NO";
    if(x == '100') if(change[50] > 0 && change[25] > 0){ 
      change[50]--; 
      change[25]--;
    }else{
      change[25] > 2 ? change[25] -= 3 : echo="NO";
    }
    change[x]++;
    
  });
  console.log(change);
  return echo;
}
