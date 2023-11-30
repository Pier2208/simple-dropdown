import { CircleEllipsis, DollarSignIcon, Edit, LogOut, PlusCircle, Trash, User, View } from "lucide-react"
import {Dropdown, Trigger, MenuList, MenuItem} from "./components/Dropdown"


function App() {
  return (
   <main className="bg-sky-800 flex min-h-screen items-center justify-center gap-x-48">
    <Dropdown>
      <Trigger icon={CircleEllipsis} />
      <MenuList>
        <MenuItem icon={Edit} name='Edit' />
        <MenuItem icon={Trash} name="Trash" />
        <MenuItem icon={View} name="View" />
      </MenuList>
     </Dropdown>

     <Dropdown>
      <Trigger icon={PlusCircle} />
      <MenuList>
        <MenuItem icon={User} name='Username' />
        <MenuItem icon={DollarSignIcon} name="My account" />
        <MenuItem icon={LogOut} name="Logout" />
      </MenuList>
     </Dropdown>
   </main>
  )
}

export default App
