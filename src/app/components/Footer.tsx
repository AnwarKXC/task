import Link from "next/link"
import Image from "next/image"
import styled from "@emotion/styled"
const Sfooter = styled.footer`
   border-top: 1px solid #e3e2e7;
   padding: 16px;
`
const Sli = styled.li`
   list-style: none;
   color: #272343;
`
const SLink = styled(Link)`
   display: flex;
   font-size: 18px;
   padding: 16px 24px;
   text-decoration: none;
   font-style: normal;
   font-weight: 500;
   color: #272343;
   gap: 1rem;
`

type Props = {}
export default function Footer({}: Props) {
   return (
      <Sfooter>
         <Sli>
            <SLink href="/Workspaces">
               <Image src="/lifebuoy.svg" alt="" width={24} height={24} /> Support
            </SLink>
         </Sli>
         <Sli>
            <SLink href="/Workspaces">
               <Image src="/logout.svg" alt="" width={24} height={24} /> Log out
            </SLink>
         </Sli>
      </Sfooter>
   )
}
