import { createStore } from "vuex";
import { searchRequest } from "../services";
import { ActionTypes } from "./types";

const { IS_LOADING, ALL_GIPHY, GIF_DETAILS } = ActionTypes;

export default createStore({
  state: {
    isLoading: false,
    giphy: [],
    gifDetails: {},
  },
  mutations: {
    [IS_LOADING](state, bol) {
      state.isLoading = bol;
    },
    [ALL_GIPHY](state, payload) {
      state.giphy = payload;
    },
    [GIF_DETAILS](state, details) {
      state.gifDetails = details;
    },
  },
  actions: {
    async getSearchResults({ commit }, query) {
      try {
        commit(IS_LOADING, true);
        const response = await searchRequest(query);
        const data = await response.data.data;
        commit(ALL_GIPHY, data);
      } catch (error) {
        throw new Error(error);
      } finally {
        commit(IS_LOADING, false);
      }
    },

    getGifDetails({ commit }, details) {
      commit(GIF_DETAILS, details);
    },
  },

  modules: {},
});
