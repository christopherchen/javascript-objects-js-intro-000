var playlist = {"The Beatles": "Blackbird", "Radiohead": "Just", "Kanye West": "Good Morning"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(list, artistName) {
  delete list.artistName;
  return list;
}