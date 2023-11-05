"use client"

import { useState } from "react"
import { Modal } from "@mantine/core"
import classes from "../page.module.css"

import styled from "@emotion/styled"
import AddAccount from "./AddAccount"
import AddButton from "./AddButton"
const CustomModal = styled(Modal)`
   .mantine-Modal-inner {
      background: rgba(64, 60, 92, 0.7);
      backdrop-filter: blur(2px);
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .mantine-Modal-title {
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      color: #272343;
   }
   .mantine-Modal-content {
      display: flex;
      flex-direction: column;
      width: 640px;
      padding: 32px;
      gap: 32px;
      border-radius: 16px;
      background: #fff;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 5px 11px 0px rgba(0, 0, 0, 0.1),
         0px 20px 20px 0px rgba(0, 0, 0, 0.09), 0px 46px 27px 0px rgba(0, 0, 0, 0.05),
         0px 81px 32px 0px rgba(0, 0, 0, 0.01), 0px 126px 35px 0px rgba(0, 0, 0, 0);
   }
   .mantine-Modal-header {
      display: flex;
      padding-bottom: 24px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      border-bottom: 1px solid var(--gray-200, #e3e2e7);
   }
`

type Props = {}
export default function Modals ( { }: Props ) {
      const [isModalOpen, setModalOpen] = useState(false)
   return (
      <div>
         <div onClick={() => setModalOpen(!isModalOpen)}>
            <AddButton />
         </div>
         <CustomModal
            className={classes.mbody}
            title="Add a new account"
            opened={isModalOpen}
            onClose={() => setModalOpen(false)}>
            <AddAccount />
         </CustomModal>
      </div>
   )
}
