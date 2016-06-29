var getMilitaryTime = function(input) {
  var time = input.split(':');
  var ampm = time[2].substr(2);
  time[2] = time[2].substr(0,2);
  //console.log(time);
  if(ampm == 'PM' && time[0] !== '12'){
    time[0] = (Number(time[0])+12).toString();
  }else if(ampm == 'AM'){
     if(time[0] == 12)time[0] = '00';
  }
  console.log(input);
  return time.join(":");
};
