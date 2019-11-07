var playlist = {"the beatles": "Blackbird", "radiohead": "Just", "kanye west": "Good Morning"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
}