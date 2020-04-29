
const initialState = { favoritePics: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteFilmIndex = state.favoritePics.findIndex(item => item === action.value)
      if (favoriteFilmIndex !== -1) {
        // L'image est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          favoritePics: state.favoritePics.filter( (item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        // L'image n'est pas dans les images favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          favoritePics: [...state.favoritePics, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite