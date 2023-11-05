import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Todo {
   icon: string
   id: number
   code: string
   Account: string
   Account_score: number
   status: string
   Country: string
   Last_updated: Date
}

interface TodosState {
   todos: Todo[]
}

const initialState: TodosState = {
   todos: [],
}

const todosSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
      addTodo: (state, action: PayloadAction<Todo>) => {
         state.todos.push(action.payload)
      },
      deleteTodo: (state, action: PayloadAction<number>) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      },
   },
})

export const { addTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer
