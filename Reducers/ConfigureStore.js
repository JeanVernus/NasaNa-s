import { createStore } from 'redux';
import toggleFavorite from './FavoritesReducer'

export default createStore(toggleFavorite)