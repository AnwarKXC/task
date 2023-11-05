"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "./Footer"
import Logo from "./Logo"
import styled from "@emotion/styled"

const Saside = styled.aside`
   display: flex;
   position: fixed;
   left: 0;
   top: 0;
   flex-direction: column;
   height: 100vh;
   width: 271px;
   background: #fbf8f5;
   border-right: 1px solid #e3e2e7;
   color: #272343;
   justify-content: space-between;
   
`

const Sul = styled.ul`
   display: flex;
   padding: 16px 0px;
   flex-direction: column;
   list-style: none;
   border-bottom: 1px solid #e3e2e7;
   color: #272343;
`

const SLink = styled(Link)`
   display: flex;
   font-size: 18px;
   padding: 16px 24px;
   text-decoration: none;
   gap: 1rem;
   font-style: normal;
   font-weight: 500;
   line-height: 27px;
   color: #272343;
`

type Props = {}

export default function SideBar({}: Props) {
   return (
      <Saside>
            <div>
               <Logo />
               <nav>
                  <Sul>
                     <li>
                        <SLink className=" flex gap-4 py-4 px-6" href="/">
                           <Image src="/row-vertical.svg" alt="" width={24} height={24} /> Home
                        </SLink>
                     </li>
                     <li>
                        <SLink className=" flex gap-4 py-4 px-6" href="/Accounts">
                           <Image src="/row-vertical.svg" alt="" width={24} height={24} /> Accounts
                        </SLink>
                     </li>
                     <li>
                        <SLink className=" flex gap-4 py-4 px-6" href="/Workspaces">
                           <Image src="/slider-horizontal.svg" alt="" width={24} height={24} />{" "}
                           Workspaces
                        </SLink>
                     </li>
                     <li className="border-b border-[#E3E2E7]">
                        <SLink className=" flex gap-4 py-4 px-6" href="/Account">
                           <Image src="/user-octagon.svg" alt="" width={24} height={24} /> Account
                        </SLink>
                     </li>
                  </Sul>
               </nav>
            </div>
         <Footer />
      </Saside>
   )
}
