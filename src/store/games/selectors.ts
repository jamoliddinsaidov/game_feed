import { IRootState } from '..'
import { IGamesState } from '../../types/GamePropTypes'

export const selectGames = (state: IRootState): IGamesState => state.games
