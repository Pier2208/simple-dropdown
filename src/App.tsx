import { DollarSignIcon, LogOut, User } from "lucide-react"
import Dropdown from "./components/Dropdown"


function App() {
  return (
   <main className="bg-sky-800 w-full min-h-screen flex items-center justify-center">
     <Dropdown>
      <Dropdown.Trigger />
      <Dropdown.MenuList>
        <Dropdown.MenuItem icon={User}>
          Username
        </Dropdown.MenuItem>
        <Dropdown.MenuItem icon={DollarSignIcon}>
          My account
        </Dropdown.MenuItem>
        <Dropdown.MenuItem icon={LogOut}>
          Logout
        </Dropdown.MenuItem>
      </Dropdown.MenuList>
     </Dropdown>
   </main>
  )
}

export default App
