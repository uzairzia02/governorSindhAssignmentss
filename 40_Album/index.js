function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Ariana Grande", "Sweetner"));
console.log(make_album("The Weeknd", "Afterhours", 2332));
