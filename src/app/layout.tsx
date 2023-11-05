import "@mantine/core/styles.css"
import SideBar from "./components/SideBar"


import { MantineProvider } from "@mantine/core"

export const metadata = {
   title: "My Mantine app",
   description: "I have followed setup instructions carefully",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <head></head>
         <body>
               <MantineProvider>
                  <SideBar />
                  {children}
               </MantineProvider>
         </body>
      </html>
   )
}
