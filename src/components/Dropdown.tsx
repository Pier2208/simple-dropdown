import { LucideIcon } from "lucide-react";
import { createContext, useContext, useState } from "react";

interface DropdownContextType {
  toggle: () => void,
  isOpen: boolean
}

const DropdownContext = createContext<DropdownContextType | null>(null)

export function Dropdown({ children }: { children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)


  return (
    <DropdownContext.Provider value={{ isOpen, toggle}}>
      <div className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

export function Trigger({ icon: Icon }: { icon: LucideIcon}) {
  const {toggle, isOpen} = useContext(DropdownContext)!;

  const handleClick = () => toggle()

  return (
    <div onClick={handleClick}>
      <Icon className={`h-8 w-8 text-white cursor-pointer ${isOpen ? 'text-slate-300' : 'text-white' }`} />
    </div>
  )
}

export function MenuList ({ children }: { children: React.ReactNode }) {
  const {isOpen } = useContext(DropdownContext)!

  return isOpen ? (
    <ul className="shadow-md bg-slate-100 absolute right-0 mt-2 rounded w-max flex flex-col">
       {children}
    </ul>
  ) : null
}

export function MenuItem({ name, icon: Icon }: { name: string, icon: LucideIcon}) {
  const {toggle} = useContext(DropdownContext)!

  return (
    <li onClick={toggle} className="hover:bg-slate-200 cursor-pointer">
      <div className="px-4 py-3 flex justify-between w-full text-sm">
        <Icon className="h-4 w-4 mr-4" />
        {name}
      </div>
    </li>
  )
}

