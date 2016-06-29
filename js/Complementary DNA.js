function DNAStrand(dna){
  var a = dna.split("");
  var echo = "";
  
  a.forEach(function(v){
    if(v == 'A')echo += 'T';
    if(v == 'T')echo += 'A';
    if(v == 'C')echo += 'G';
    if(v == 'G')echo += 'C';
  });
  
  return echo;
}
