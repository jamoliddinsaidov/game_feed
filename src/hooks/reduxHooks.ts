import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { IAppDispatch, IRootState } from '../store'

export const useAppDispatch: () => IAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
