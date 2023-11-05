import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./todosSlice"
import { combineReducers } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
   todos: todosReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
   reducer: rootReducer,
})

export default store
