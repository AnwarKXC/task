"use client"


import Image from "next/image"
import Footer from "./Footer"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import styled from "@emotion/styled"

const SidebarContainer = styled.aside`
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

const SidebarList = styled.ul`
   display: flex;
   padding: 16px 0px;
   flex-direction: column;
   list-style: none;
   border-bottom: 1px solid #e3e2e7;
   color: #272343;
`

const SidebarLink = styled.a<{ $isCurrent: boolean }>`
   display: flex;
   font-size: 18px;
   padding: 16px 24px;
   text-decoration: none;
   gap: 1rem;
   font-style: normal;
   font-weight: 500;
   line-height: 27px;
   background: ${(props) => (props.$isCurrent ? "#F2EAE1" : "#fbf8f5")};
   cursor: pointer;
   color:#272343
`

type Props = {}

export default function SideBar({}: Props) {
  const pathname = usePathname()

   return (
      <SidebarContainer>
         <div>
            <Logo />
            <nav>
               <SidebarList>
                  <li>
                     <SidebarLink $isCurrent={pathname === "/"} href="/">
                        <Image src="/row-vertical.svg" alt="" width={24} height={24} /> Home
                     </SidebarLink>
                  </li>
                  <li>
                     <SidebarLink $isCurrent={pathname === "/accounts"} href="/accounts">
                        <Image src="/row-vertical.svg" alt="" width={24} height={24} /> Accounts
                     </SidebarLink>
                  </li>
                  <li>
                     <SidebarLink $isCurrent={pathname === "/Workspaces"} href="/Workspaces">
                        <Image src="/slider-horizontal.svg" alt="" width={24} height={24} />
                        Workspaces
                     </SidebarLink>
                  </li>
                  <li>
                     <SidebarLink $isCurrent={pathname === "/Workspaces"} href="/Workspaces">
                        <Image src="/user-octagon.svg" alt="" width={24} height={24} />
                        Account
                     </SidebarLink>
                  </li>
               </SidebarList>
            </nav>
         </div>
         <Footer />
      </SidebarContainer>
   )
}
