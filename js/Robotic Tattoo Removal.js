function robot(skinScan) {
  var y = 0;
  var x = 0;
  
  while(y < skinScan.length){
    x = 0;
    while(x < skinScan.length){
      if(skinScan[y][x] == "X")skinScan[y][x] = "*";
      x++;
    } 
    y++;
  }
  return skinScan;
}
