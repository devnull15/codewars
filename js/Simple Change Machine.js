function changeMe(moneyIn){
  var intake;
  var ext = "";
  var ten = "";
  if(moneyIn.substring(0, 1) == '£'){
   intake = parseInt(moneyIn.substring(1, 10)) ;
   intake = intake * 100;
  }else if(moneyIn.slice(-1) == 'p'){
   intake = parseInt(moneyIn) ;
   
  }else{
    return moneyIn;
  }
  var change = intake % 20;
  
  if (intake == 20){ 
    ten = "10p 10p";
    change = 0;
  }else if(intake > 500){
    return moneyIn;
  }else if(change == 0){
    change = intake / 20;
  }else{
    var y = intake-change;
    change = y / 20; 
    ten = " 10p";
  }
  
  for(x=0;x<change;x++){
    if(x>0){
      ext += " ";
    }
    ext += "20p";
  }
  ext += ten;
  
  return ext;
}
