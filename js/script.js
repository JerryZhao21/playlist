let trackList = [
  {
    name: "Agoraphobic",
    artist: "Corpse",
    length: "2:09",
    image:
      "https://i1.sndcdn.com/artworks-RsjS3PWjfOXk8JIx-0ySnGQ-t500x500.jpg",
    link: "https://www.youtube.com/watch?v=ra-XCs6LHAM&ab_channel=CORPSE"
  },
  {
    name: "Never Satisfied",
    artist: "Corpse",
    length: "1:59",
    image:
      "https://images.genius.com/0254307128084e285037ff093f06e993.300x300x1.jpg",
    link: "https://www.youtube.com/watch?v=cCc7yTpRGcI"
  },
  {
    name: "Out of My League",
    artist: "Fitz and the Tantrums",
    length: "3:06",
    image: "http://www.jonkmusic.com/wp-content/uploads/2013/05/Fitz.jpg",
    link:
      "https://www.youtube.com/watch?v=I-QmZpLWjHc&ab_channel=CristianFawkes"
  }
];

function makeTable() {
  for (let listElement of trackList) {
    $("#songList").append(`<p>${listElement.name}</p>`);
    $("#songArtist").append(`<p>${listElement.artist}</p>`);
    $("#songLength").append(`<p>${listElement.length}</p>`);
    $("#songImage").append(`<img src=${listElement.image}>`);
    $("#songLink").append(
      `<a href="${listElement.link}" target="_blank">${listElement.name}</a>`
    );
  }
}
function clearTable() {
  $("#songList").html("");
  $("#songArtist").html("");
  $("#songLength").html("");
  $("#songImage").html("");
  $("#songLink").html("");
}

$("#submitSongInfo").click(function() {
  let newSongName = $("#songInput").val();
  let newSongArtist = $("#artistInput").val();
  let newSongLength = $("#lengthInput").val();
  let newSongImage = $("#imageInput").val();
  let newSongLink = $("#linkInput").val();

  clearTable();

  //Clear the table then refresh with new value
  //by calling the function with the new value

  let newListing = {
    name: newSongName,
    artist: newSongArtist,
    length: newSongLength,
    image: newSongImage,
    link: newSongLink
  };

  trackList.push(newListing);
  makeTable();
});

makeTable();


