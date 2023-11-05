import React, { useState, useEffect } from "react"
import { Select, TextInput } from "@mantine/core"
import classes from "../page.module.css"
import AddButton from "./AddButton"
import styled from "@emotion/styled"

const Sform = styled.form`
   display: flex;
   padding-bottom: 0px;
   flex-direction: column;
   align-items: flex-start;
   gap: 40px;
   align-self: stretch;
`

const Sradio = styled.div`
   display: flex;
   align-items: flex-start;
   gap: 32px;

   label {
      color: #272343;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
   }
`

const Ssubmit = styled.div`
   display: flex;
   width: 100%;
   align-items: flex-start;
   gap: 32px;
   padding-top: 24px;
   border-top: 1px solid #e3e2e7;
`

const Sbutton = styled.button`
   background: none;
   border: none;
   cursor: pointer;
   outline: none;
`

const STextInput = styled(TextInput)`
   input {
      border: 1px solid #e3e2e7;
      border-radius: 8px;
      padding: 12px 16px;
      font-size: 16px;
   }
`

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

type Props = {}

export default function AddAccount({}: Props) {
   let [newAccount, setNewAccount] = useState<string>("")
   let [Account_score, setAccount_score] = useState<number>(0)
   const [newCountry, setNewCountry] = useState<string>("")
   let [status, setStatus] = useState<string>("completed") // Default to "completed"
   let [currentDate, setCurrentDate] = useState(new Date())
   const [todos, setTodos] = useState<Todo[]>([])

   useEffect(() => {
      const storedTodos = localStorage.getItem("todos")
      if (storedTodos) {
         const parsedTodos = JSON.parse(storedTodos)
         setTodos(parsedTodos)
      }
   }, [])

   const addTodo = (e: React.FormEvent) => {
      e.preventDefault()
      if (newAccount.trim() !== "") {
         const newId = todos.length ? todos[todos.length - 1].id + 1 : 1
         const newTodoItem: Todo = {
            icon: "logo",
            code: "TW304719",
            Account_score: Account_score,
            id: newId,
            Account: newAccount,
            status: status,
            Country: newCountry,
            Last_updated: currentDate,
         }
         setTodos([...todos, newTodoItem])
         localStorage.setItem("todos", JSON.stringify([...todos, newTodoItem]))
         setNewAccount("")
         setStatus("")
         setAccount_score(0)
      }
   }

   return (
      <Sform onSubmit={addTodo}>
         <Sradio>
            <div>
               <input
                  type="radio"
                  id="completed"
                  name="status"
                  value="completed"
                  checked={status === "completed"}
                  onChange={() => setStatus("completed")}
               />
               <label htmlFor="completed">Completed</label>
            </div>
            <div>
               <input
                  type="radio"
                  id="not"
                  name="status"
                  value="not"
                  checked={status === "not"}
                  onChange={() => setStatus("not")}
               />
               <label htmlFor="not">Not completed</label>
            </div>
         </Sradio>

         <Select
            className={classes.full}
            comboboxProps={{ withinPortal: true }}
            data={["EGY", "UAE", "SA"]}
            placeholder="Value"
            label="Country of registration"
            value={newCountry ?? ""}
            onChange={(value) => setNewCountry(value || "")}
         />
         <STextInput
            placeholder="Search company"
            value={newAccount}
            onChange={(e) => setNewAccount(e.currentTarget.value)}
            className={classes.full}
         />
         <STextInput
            placeholder="Score"
            type="number"
            value={Account_score}
            onChange={(e) => setAccount_score(parseFloat(e.currentTarget.value))}
            className={classes.full}
         />
         <Ssubmit>
            <Sbutton type="submit">
               <AddButton />
            </Sbutton>
         </Ssubmit>
      </Sform>
   )
}
