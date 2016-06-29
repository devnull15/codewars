function  calculateAge(born, year) {
  var calc = year - born;
  var sss;
  if(calc == 1 || calc == -1){
    sss = "year";
  }else{
    sss = "years";
  }
  if(calc < 0){
    calc = calc * -1;
    return "You will be born in "+calc+" "+sss+".";
  }else if(calc == 0){
    return "You were born this very year!";
  }else{
    return "You are "+calc+" "+sss+" old.";
  }
}
