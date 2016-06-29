function shape(arr){
  var obj = [];
  for(y=0;y<arr.length;y++){
    for(x=0;x<arr[y].length;x++){
      if(arr[y][x] == 1)obj.push(x+","+y);
    }
  }
  return obj
}


function outerEdgesOf(arr){
  var obj=shape(arr);
  var arr2=[];
  
  for(y=0;y<arr.length;y++){
    arr2.push([]);
    for(x=0;x<arr[y].length;x++){
      arr2[y][x] = 0;
      if(obj.indexOf((x+1)+","+(y+1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x)+","+(y+1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x-1)+","+(y+1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x+1)+","+(y)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x-1)+","+(y)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x+1)+","+(y-1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x)+","+(y-1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x-1)+","+(y-1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x)+","+(y)) > -1)arr2[y][x] = 0;
    }
  }
  //display(arr);
  //console.log(obj);
  //display(arr2);
  return arr2;
}

function innerEdgesOf(arr){
  var obj=shape(arr);
  var arr2=[];
  var innerchk = 0;
  
  for(y=0;y<arr.length;y++){
    arr2.push([]);
    for(x=0;x<arr[y].length;x++){
      arr2[y][x] = 0;
      if(obj.indexOf((x)+","+(y)) > -1){
        arr2[y][x] = 1;
        innerchk = 0;
        if(obj.indexOf((x+1)+","+(y+1)) > -1)innerchk++;
        if(obj.indexOf((x)+","+(y+1)) > -1)innerchk++;
        if(obj.indexOf((x-1)+","+(y+1)) > -1)innerchk++;
        if(obj.indexOf((x+1)+","+(y)) > -1)innerchk++;
        if(obj.indexOf((x-1)+","+(y)) > -1)innerchk++;
        if(obj.indexOf((x+1)+","+(y-1)) > -1)innerchk++;
        if(obj.indexOf((x)+","+(y-1)) > -1)innerchk++;
        if(obj.indexOf((x-1)+","+(y-1)) > -1)innerchk++;
        if(innerchk == 8)arr2[y][x] = 0;
      }
      
    }
  }
  //display(arr);
  //console.log(obj);
  //display(arr2);
  return arr2;
}

function grow(arr){
  var obj=shape(arr);
  var arr2=[];
  
  for(y=0;y<arr.length;y++){
    arr2.push([]);
    for(x=0;x<arr[y].length;x++){
      arr2[y][x] = 0;
      if(obj.indexOf((x+1)+","+(y+1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x)+","+(y+1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x-1)+","+(y+1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x+1)+","+(y)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x-1)+","+(y)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x+1)+","+(y-1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x)+","+(y-1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x-1)+","+(y-1)) > -1)arr2[y][x] = 1;
      if(obj.indexOf((x)+","+(y)) > -1)arr2[y][x] = 1;
    }
  }
  //display(arr);
  //console.log(obj);
  //display(arr2);
  return arr2;
}

function shrink(arr){
  var obj=shape(arr);
  var arr2=[];
  var innerchk = 0;
  
  for(y=0;y<arr.length;y++){
    arr2.push([]);
    for(x=0;x<arr[y].length;x++){
      arr2[y][x] = 0;
      if(obj.indexOf((x)+","+(y)) > -1){
        arr2[y][x] = 0;
        innerchk = 0;
        if(obj.indexOf((x+1)+","+(y+1)) > -1)innerchk++;
        if(obj.indexOf((x)+","+(y+1)) > -1)innerchk++;
        if(obj.indexOf((x-1)+","+(y+1)) > -1)innerchk++;
        if(obj.indexOf((x+1)+","+(y)) > -1)innerchk++;
        if(obj.indexOf((x-1)+","+(y)) > -1)innerchk++;
        if(obj.indexOf((x+1)+","+(y-1)) > -1)innerchk++;
        if(obj.indexOf((x)+","+(y-1)) > -1)innerchk++;
        if(obj.indexOf((x-1)+","+(y-1)) > -1)innerchk++;
        if(innerchk == 8)arr2[y][x] = 1;
      }
      
    }
  }
  //display(arr);
  //console.log(obj);
  //display(arr2);
  return arr2;
}
