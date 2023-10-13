import { useState } from "react";
import  NavItem  from "./Elements/NavItemElements";
import  DropdownMenuLink  from "./Elements/DropdownMenuLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="md:hidden relative">
        <div>
          <label
            tabIndex="0"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          {isOpen && <DropdownMenuLink />}
        </div>
      </nav>

      <nav className="hidden md:block">
        <ul className="flex flex-row gap-5 text-lg">
          <NavItem link="#home" text="Home" />
          <NavItem link="#about" text="About" />
          <NavItem link="#resume" text="Resume" />
          <NavItem link="#hobbies" text="Hobbies" />
          <NavItem link="#contact" text="Contact" />
        </ul>
      </nav>
    </>
  );
}
