import { NavItem } from "./NavItemElements";

export const DropdownMenuLink = () => (
  <ul className="mt-3 p-2 shadow w-20 text-right bg-white rounded-md absolute right-0">
    <NavItem link="#" text="Home" />
    <NavItem link="#" text="About" />
    <NavItem link="#" text="Resume" />
    <NavItem link="#" text="Hobbies" />
    <NavItem link="#" text="Contact" />
  </ul>
);