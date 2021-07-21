const searchInput = document.querySelector(".searchInput");
const songList = document.querySelector("ul");
const noData = document.querySelector(".noData");

searchInput.addEventListener("keyup", event => {
fetch("https://itunes.apple.com/search?term="+ event.target.value + "&entity=song")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        songList.innerHTML = '';
        noData.innerHTML = '';
        const songs = data.results;
        if(songs.length === 0) {
            noData.innerHTML = "<h1>No songs found!</h1>"
        } else {
            for(let i = 0; i <= songs.length; i++) {
                const song = songs[i];
                const songElement = document.createElement("li");

                songElement.innerHTML = `Artist name: ${song.artistName}, Track name: ${song.trackName}, Genre: ${song.primaryGenreName}`
                songList.appendChild(songElement);
            }
        }

    })
    .catch((error) => {
        alert(error);
    })
})