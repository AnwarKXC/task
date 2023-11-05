import { Select } from "@mantine/core"
import styled from "@emotion/styled"
import classes from "../page.module.css"


const Sdiv = styled.div`
   display: flex;
   gap: 16px;
   overflow: hidden;
   width: 100%;
`
type Props = {}
export default function SearchBar({}: Props) {
   return (
      <Sdiv>
         <Select
            className={classes.first}
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={["Accounts who have completed", "Accounts who haven't completed"]}
            placeholder="Pick one"
            label="Filter by"
         />
         <Select
            className={ classes.sec }
            multiple
            mt="md"
            comboboxProps={{ withinPortal: true }}
            data={["Files added", "Contacts added", "Representatives invited"]}
            placeholder="select"
            label="Conditions"
         />
      </Sdiv>
   )
}
