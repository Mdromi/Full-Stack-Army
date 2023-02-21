import { action, persist } from "easy-peasy";

const recentModel = persist({
    items: [],
    addToTecent: action((state, playlistId) => {
        state.items.unShift(playlistId);
        state.items = state.items.slice(0, 5);
    })
});

export default recentModel;