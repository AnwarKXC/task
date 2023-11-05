import styled from "@emotion/styled"
import Image from "next/image"

const Sbutton = styled.div`
   display: flex;
   padding: 12px 24px;
   justify-content: center;
   align-items: center;
   gap: 8px;
   border-radius: 4px;
   border: none;
   color: #272343;
   font-size: 18px;
   font-style: normal;
   font-weight: 500;
   line-height: 27px;
   background: #ffd803;
   cursor:pointer;
`

type Props = {}
export default function AddButton({}: Props) {
   return (
      <div>
         <Sbutton >
            <Image src="/+button.svg" alt="" width={24} height={24} /> Add account
         </Sbutton>
      </div>
   )
}
