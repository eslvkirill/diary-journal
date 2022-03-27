const state = {
  showPanel: 'collections',
};

const getters = {
  showWhichPanel: (state) => state.showPanel,
};

const actions = {
  changePanel({ commit }, panel) {
    commit('setPanel', panel);
  },
};

const mutations = {
  setPanel(state, panel) {
    state.showPanel = panel;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
