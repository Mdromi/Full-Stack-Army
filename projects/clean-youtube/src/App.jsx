import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";
import Navbar from "./components/navbar/navbar";
import PlaylistCardItem from "./components/playlist-card-item/playlist-card-item";
import usePlaylist from "./hooks/usePlaylist";

const HomePage = ({ playlistArray }) => {
  const playlist = useStoreActions((actions) => actions.playlist);
  const Id = "PLG7HKKbpE8RINBexLm8zmniqvXoxS7eqv";
  useEffect(() => {
    playlist.getPlaylistData(Id);
    console.log("This Called", playlist.getPlaylistData(Id));
  }, []);

  return (
    <Container maxWidth={"md"} sx={{ marginTop: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container sx={{ alignItems: "stretch" }}>
          {playlistArray.map((item) => (
            <Grid item xs={12} md={5} lg={4} mb={2}>
              <PlaylistCardItem
                key={item.playlistId}
                playlistId={item.playlistId}
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

const NotFound = () => {
  return (
    <Container maxWidth={"md"} sx={{ marginTop: 16 }}>
      <Typography variant={"h2"} align="center">
        404 Page Not Found
      </Typography>
    </Container>
  );
};

const PlayerPage = ({ playlists }) => {
  const { playListId } = useParams();
  const current = playlists[playListId];
  console.log(current);

  if (!current) return;

  return (
    <Container maxWidth={"md"} sx={{ marginTop: 16 }}>
      <Typography variant={"h2"} align="center">
        {current.playlistTitle}
      </Typography>
      <Typography variant={"body1"} align="center">
        {current.playlistDescription}
      </Typography>
    </Container>
  );
};

function App() {
  const { getPlaylistById, playlists, error } = usePlaylist();

  if (error) console.log("ERROR:- ", error);

  const playlistArray = Object.values(playlists);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Routes>
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
        <Route
          path="/player/:playListId"
          element={<PlayerPage playlists={playlists} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const { getPlaylistById, playlists, error, loading } = usePlaylist();

//   useEffect(() => {
//     Id = "PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR";
//     Id = "PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP";
//     Id = "PL6QREj8te1P5k_kIM2-8E4VP9Sej0Yez3";
//     Id = "PLTjRvDozrdlxlMnoG9_yJKPMxMJu8FWRK";
//     Id = "PLNYkxOF6rcICVl6Vb-AFlw81bQLuv6a_P";
//     Id = "PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2";
//     Id = "PLYwpaL_SFmcD1pjNSpEm2pje3zPrSiflZ";
//     Id = "PLBAZWBMYeVYisKf6EuZEGbpbU52dwdxJs";
//     Id = "PLG7HKKbpE8RINBexLm8zmniqvXoxS7eqv";
//   }, []);
