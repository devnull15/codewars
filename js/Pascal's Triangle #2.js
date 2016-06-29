function pascal(depth) {
  var arr = [];
  var arr2 = [];
  var addnum = 0;
  
  for(x=0;x<depth;x++){
    arr2 = [];
    addnum = 0;
    for(y=0;y<x+1;y++){
      if(y == 0 || y == x){
        arr2.push(1);
      }else{        
        arr2.push(arr[x-1][addnum] + arr[x-1][addnum+1]);
        addnum++;
      }
    }
    arr.push(arr2);
  }
  return arr;
}
