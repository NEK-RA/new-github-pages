export const state = () => ({
  darkTheme: true,
  title: 'Some title'
})

export const mutations = {
  UPDATE_TITLE (state, value) {
    state.title = value
  },
  TOGGLE_THEME (state) {
    state.darkTheme = !state.darkTheme
  }
}

export const actions = {
  updateTitle ({ commit }, value) {
    commit('UPDATE_TITLE', value)
  },
  toggleTheme ({ commit }) {
    commit('TOGGLE_THEME')
  }
}

export const getters = {
  getTitle: state => state.title,
  getDark: state => state.darkTheme

}
