function songDecoder(song){
  song = song.replace(/WUB/g, " ");
  song = song.trim();
  song = song.replace(/      /g, " ");
  song = song.replace(/     /g, " ");
  song = song.replace(/    /g, " ");
  song = song.replace(/   /g, " ");
  song = song.replace(/  /g, " "); 
  return song;
}
