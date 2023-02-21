import { action, persist } from "easy-peasy";

const favortiteModel = persist({
    items: [],
    addToFavorite: action((state, playlistId) => {
        state.items.push(playlistId)
    }),
    removeFromFavorite: action((state, playlistId) => {
        state.items = state.items.filter(pId => playlistId !== pId);
    }),
});

export default favortiteModel;