import { CircleEllipsis, LucideIcon } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

interface DropdownContextType {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>,
  dropdownOpen: boolean
}

const DropdownContext = createContext<DropdownContextType | null>(null)

// gestionnaire de dropdowns
export function DropdownProvider({ children }: { children: React.ReactNode}) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <DropdownContext.Provider value={{ dropdownOpen, setDropdownOpen}}>
     {children}
    </DropdownContext.Provider>
  )
}

export function Dropdown({ children }: { children: React.ReactNode}) {
  return (
    <div className="relative">
      {children}
    </div>
  )
}

function Trigger() {
  const {setDropdownOpen, dropdownOpen} = useContext(DropdownContext)!;
  const ref = useClickOutside(() => setDropdownOpen(false))

  const handleClick = () => {
    setDropdownOpen(prev => !prev)
  }

  return (
    <div ref={ref} onClick={handleClick}>
      <CircleEllipsis className={`h-8 w-8 text-white cursor-pointer ${dropdownOpen ? 'text-slate-300' : 'text-white' }`} />
    </div>
  )
}

function MenuList ({ children }: { children: React.ReactNode }) {
  const {dropdownOpen } = useContext(DropdownContext)!

  return dropdownOpen ? (
    <ul className="p-3 shadow-md bg-slate-100 absolute right-0 mt-2 rounded w-max flex flex-col gap-y-3">
       {children}
    </ul>
  ) : null
}

function MenuItem({ children, icon: Icon }: { children: React.ReactNode, icon: LucideIcon}) {
  const {setDropdownOpen} = useContext(DropdownContext)!

  return (
    <li onClick={() => setDropdownOpen(false)} className="flex justify-between w-full text-sm hover:bg-slate-400 cursor-pointer">
      <Icon className="h-4 w-4 mr-4" />
      {children}
    </li>
  )
}

Dropdown.Trigger = Trigger
Dropdown.MenuList = MenuList
Dropdown.MenuItem = MenuItem

export default Dropdown
