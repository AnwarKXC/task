import { Table, Anchor, Text } from "@mantine/core"
import classes from "../page.module.css"
import Image from "next/image"

import { RootState } from "../../redux/reduxStore"
import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from "../../redux/todosSlice"

import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import AddButton from "./AddButton"
import Modals from "./Modal"

const Code = styled.div`
   font-size: 12px;
   font-style: normal;
   font-weight: 400;
   line-height: 18px;
   color: #9391a4;
`

const Account = styled.div`
   color: #272343;
   font-size: 16px;
   font-style: normal;
   font-weight: 600;
   line-height: 24px;
`
const Swrab = styled.div`
   display: flex;
   padding-top: 140px;
   flex-direction: column;
   align-items: center;
   gap: 32px;
   flex: 1 0 0;
   align-self: stretch;
`
const Stitle = styled.div`
   font-size: 18px;
   font-style: normal;
   font-weight: 600;
   line-height: 27px;
   color: #272343;
   width: 289px;
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 16px;
`
const Sp = styled.p`
   font-size: 16px;
   color: #7a778f;
   text-align: center;
   font-style: normal;
   font-weight: 400;
   line-height: 24px;
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

export function AccountsList() {
   const [todos, setTodos] = useState<Todo[]>([])
   useEffect(() => {
      const storedTodos = localStorage.getItem("todos")
      if (storedTodos) {
         const parsedTodos = JSON.parse(storedTodos)
         setTodos(parsedTodos)
      }
   }, [])

   const deleteTodo = (id: number) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id)
      setTodos(updatedTodos)
      localStorage.setItem("todos", JSON.stringify(updatedTodos))
   }

   const rows = todos.map((row: Todo) => {
      return (
         <Table.Tr key={row.id}>
            <Table.Td>
               <Anchor component="button" fz="sm">
                  {row.icon}
               </Anchor>
            </Table.Td>
            <Table.Td>
               <Account>{row.Account}</Account>
               <Code>{row.code}</Code>
            </Table.Td>
            {row.Account_score > 90 ? (
               <Table.Td className={classes.A}>{row.Account_score}%</Table.Td>
            ) : row.Account_score <= 90 && row.Account_score > 10 ? (
               <Table.Td className={classes.B}>{row.Account_score}%</Table.Td>
            ) : (
               <Table.Td className={classes.C}>{row.Account_score}%</Table.Td>
            )}

            <Table.Td>{row.status}</Table.Td>
            <Table.Td>
               <Anchor component="button" fz="sm">
                  {row.Country}
               </Anchor>
            </Table.Td>
            <Table.Td>{row.Last_updated.toString()}</Table.Td>
            <Table.Td>
               <Image
                  onClick={() => deleteTodo(row.id)}
                  src="/trash.svg"
                  alt=""
                  width={24}
                  height={24}
               />
            </Table.Td>
         </Table.Tr>
      )
   })

   return (
      <div className={classes.table}>
         {todos.length > 0 ? (
            <Table.ScrollContainer className={classes.table} minWidth={1000}>
               <Table verticalSpacing="xs">
                  <Table.Thead>
                     <Table.Tr className={classes.tablehead}>
                        <Table.Th></Table.Th>
                        <Table.Th>Account</Table.Th>
                        <Table.Th>Account score</Table.Th>
                        <Table.Th>KYB/KYC status</Table.Th>
                        <Table.Th>Country</Table.Th>
                        <Table.Th>Last updated</Table.Th>
                        <Table.Th></Table.Th>
                     </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
               </Table>
            </Table.ScrollContainer>
         ) : (
            <div className={classes.table}>
               <Swrab>
                  <Image src={"buildings.svg"} width={64} height={64} alt={"no todos"}></Image>
                  <Stitle>
                     <div>No accounts</div>{" "}
                     <Sp>Add a new account to start monitoring them for KYC compliance purposes</Sp>
                  </Stitle>
                  <Modals />
               </Swrab>
            </div>
         )}
      </div>
   )
}
