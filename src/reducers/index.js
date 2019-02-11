import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Love Song",
      duration: "4:05"
    },
    {
      title: "Lullaby",
      duration: "2:05"
    },
    {
      title: "Badfish",
      duration: "4:35"
    },
    {
      title: "Lipstick",
      duration: "3:33"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
