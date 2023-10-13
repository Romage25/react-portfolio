import NavItem from "./NavItemElements";

export default function DropdownMenuLink() {
  return (
    <ul className="mt-3 p-3 shadow w-20 text-right bg-white rounded-md absolute right-0">
      <NavItem link="#home" text="Home" />
      <NavItem link="#about" text="About" />
      <NavItem link="#resume" text="Resume" />
      <NavItem link="#hobbies" text="Hobbies" />
      <NavItem link="#contact" text="Contact" />
    </ul>
  );
}
