import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import store from "../store"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


//selector da duoc custom
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// usedispatch custom
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch