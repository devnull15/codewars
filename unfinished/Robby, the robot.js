function chkblock(x,y,walk){
  if(walk.indexOf(x +','+ y) > -1){
    return false;
  }
  return true;
}

function getCommands(field, power) {
  console.log(power);
  var info = {};
  var blocked = { N: false , E: false , S: false , W: false};
  var walk = [];
  var echo = [];
  var arr = field.match(new RegExp('.{1,' + Math.sqrt(field.length) + '}', 'g'));
  for(y=0;y<arr.length;y++){
   arr[y] = arr[y].split('');
  }
  
  for(y=0;y<arr.length;y++){
    for(x=0;x<arr.length;x++){
      if(arr[y][x] == 'S')info['R'] = [x,y];
      if(arr[y][x] == 'T')info['T'] = [x,y];
      if(arr[y][x] == '.' || arr[y][x] == 'T') walk.push(x+','+y);
    }
  }
  
  info['RD'] = 'N';
  info['P'] = 0;
  info['P'] = 0;
  var xdif = 0;
  var ydif = 0;
  
  while(info['T'][0] !== info['R'][0] || info['T'][1] !== info['R'][1]){
    //console.log(info);   
    //console.log(walk.indexOf(info['R'][0] +','+ info['R'][1]));
    if(walk.indexOf(info['R'][0] +','+ info['R'][1]) > -1){
      walk.splice(walk.indexOf(info['R'][0] +','+ info['R'][1]), 1);
    }
    //console.log(walk);
    blocked['N'] = chkblock(info['R'][0],info['R'][1]-1,walk);
    blocked['E'] = chkblock(info['R'][0]+1,info['R'][1],walk);
    blocked['S'] = chkblock(info['R'][0],info['R'][1]+1,walk);
    blocked['W'] = chkblock(info['R'][0]-1,info['R'][1],walk);
    //console.log(blocked);
    if(blocked['N']==true&&blocked['E']==true&&blocked['S']==true&&blocked['W']==true){
      return [];
    }   
    if(info['T'][0] != info['R'][0] && (blocked['E'] == false ||blocked['W'] == false)){
    
      xdif = info['T'][0] - info['R'][0];
      if(xdif>0){
        if(info['RD'] == 'N'){
          echo.push('r');
          info['RD'] = 'E';
          info['P']++;
        }
        if(info['RD'] == 'S'){
          echo.push('l');
          info['RD'] = 'E';
          info['P']++;
        }
        echo.push('f');
        info['R'][0]++;
        info['P']++;
      }
      if(xdif<0){
         if(info['RD'] == 'N'){
          echo.push('l');
          info['RD'] = 'W';
          info['P']++;
        }
        if(info['RD'] == 'S'){
          echo.push('r');
          info['RD'] = 'W';
          info['P']++;
        }
        echo.push('f');
        info['R'][0]--;
        info['P']++;
      }
      
    }else if(info['T'][1] != info['R'][1] && (blocked['N'] == false ||blocked['S'] == false)){
    
      ydif = info['T'][1] - info['R'][1];
      if(ydif>0){
        if(info['RD'] == 'W'){
          echo.push('l');
          info['RD'] = 'S';
          info['P']++;
        }
        if(info['RD'] == 'E'){
          echo.push('r');
          info['RD'] = 'S';
          info['P']++;
        }
        echo.push('f');
        info['R'][1]++;
        info['P']++;
      }
      if(ydif<0){
         if(info['RD'] == 'W'){
          echo.push('r');
          info['RD'] = 'N';
          info['P']++;
        }
        if(info['RD'] == 'E'){
          echo.push('l');
          info['RD'] = 'N';
          info['P']++;
        }
        echo.push('f');
        info['R'][1]--;
        info['P']++;
        
      }
      
    }
  }
  if(info['P'] > power)echo = [];
 
  return echo;
}
