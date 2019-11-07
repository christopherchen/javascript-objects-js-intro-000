var playlist = {"the beatles": "Blackbird", "radiohead": "Just", "kanye west": "Good Morning"};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song});
}