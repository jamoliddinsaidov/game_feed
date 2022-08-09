import { IRootState } from '..'
import { IGamesState } from '../../types/GamePropTypes'

export const selectFilteredGames = (state: IRootState): IGamesState => state.filteredGames
