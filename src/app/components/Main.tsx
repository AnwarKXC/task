"use client"

import styled from "@emotion/styled"
import SearchBar from "./SearchBar"
import Header from "./Header"
import { AccountsList } from "./AccountsList"
const Smain = styled.section`
   display: flex;
   width: calc(100% - 271px);
   height: 100%;
   margin-left: 271px;
   margin-top: 71px;
   padding: 32px;
   flex-direction: column;
   align-items: flex-start;
   gap: 32px;
`




type Props = {}
export default function Main ( { }: Props ) {
   return (
      <div>
         <Header />
         <Smain>
            <SearchBar />
            <AccountsList/>
         </Smain>
      </div>
   )
}
