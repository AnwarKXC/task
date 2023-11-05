"use client"
import styled from "@emotion/styled"
import Modals from "./Modal"
const Sheader = styled.header`
   position: fixed;
   top: 0;
   right: 0;
   height: 72px;
   width: calc(100% - 271px);
   background: white;
   border-bottom: 1px solid #e3e2e7;
   color: #272343;
`
const Sdiv = styled.div`
   padding: 0 32px;
   display: flex;
   width: 100%;

   align-items: center;
   justify-content: space-between;
`
const Sh1 = styled.h1`
   font-size: 24px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
`

type Props = {}
export default function Header({}: Props) {

   return (
      <Sheader>
         <Sdiv>
            <Sh1>Monitored accounts</Sh1>
            <Modals />
         </Sdiv>
      </Sheader>
   )
}
