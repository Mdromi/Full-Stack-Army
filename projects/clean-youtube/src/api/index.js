import axios from "axios";

const key = import.meta.env.VITE_BASE_KEY;

const getPlayListItem = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
  if (data.nextPageToken) {
    console.log("data.nextPageToken", data.nextPageToken);
    result = getPlayListItem(playlistId, data.nextPageToken, result);
  }
  return result;
};

const getPlayList = async (playlistId) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

  const { data } = await axios.get(URL);
  console.log("data", data);
  let playListItems = await getPlayListItem(playlistId);

  const {
    channelId,
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelTitle,
  } = data?.items[0]?.snippet;

  // let cid, ct;

  playListItems = playListItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      description,
      thumbnails: { medium },
      contentDetails: item.contentDetails,
    };
  });


  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnail: thumbnails.default,
    channelId,
    channelTitle,
    playListItems,
  };
};

export default getPlayList;
