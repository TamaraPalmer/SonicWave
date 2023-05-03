import axios from "axios";
import { useState, useEffect } from "react";

function Game() {
  const [music, setMusic] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://v1.nocodeapi.com/daniahern/spotify/nEIKdbDiRpIIoLEF/playlists?id=37i9dQZF1DX4o1oenSJRJd?si=81eadda3b1a647c2"
      )
      .then((response) => {
        const tracks = response.data.tracks.items.map((item) => {
          const track = item.track;
          return {
            name: track.name,
            artist: track.artists[0].name, // assuming there is only one artist per track
            preview: track.preview_url,
          };
        });
        setMusic(tracks);
      });
  }, []);

  function getRandomTrack(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
  }

  useEffect(() => {
    if (music.length > 0) {
      setSelectedTrack(getRandomTrack(music));
    }
  }, [music]);

  const defaultPreview = selectedTrack ? selectedTrack.preview : null;
  const defaultArtist = selectedTrack ? selectedTrack.artist : null;
  const defaultName = selectedTrack ? selectedTrack.name : null;

  useEffect(() => {
    const audioPlayer = document.getElementById("audioPlayer");
    let timerId = null;
    if (audioPlayer) {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
      timerId = setTimeout(() => {
        audioPlayer.pause();
        setSelectedTrack(getRandomTrack(music));
      }, 5000);
    }
    return () => clearTimeout(timerId);
  }, [defaultPreview, music]);

  return (
    <article>
      <audio id="audioPlayer" src={defaultPreview} preload="auto"></audio>
      <button onClick={() => setSelectedTrack(getRandomTrack(music))}>
        REVEAL
      </button>
      <div>
        <p>Song Title: {defaultName}</p>
        <p>Artist: {defaultArtist}</p>
      </div>
    </article>
  );
}

export default Game;
