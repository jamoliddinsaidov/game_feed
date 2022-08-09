import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import gamesReducer from './games/reducer'
import filteredGamesReducer from './filteredGames/reducer'

const rootReducer = combineReducers({
  games: gamesReducer,
  filteredGames: filteredGamesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type IRootState = ReturnType<typeof store.getState>
export type IAppDispatch = typeof store.dispatch
