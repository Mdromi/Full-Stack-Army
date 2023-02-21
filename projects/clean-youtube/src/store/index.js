import { createStore } from 'easy-peasy';
import favortiteModel from './favortite-model';
import playlistModel from './playlist-model';
import recentModel from './recent-model';

const store = createStore({
  playlist: playlistModel,
  favorites: favortiteModel,
  recents: recentModel, 
});

export default store;