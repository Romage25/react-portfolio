/* eslint-disable react/prop-types */
export const NavItem = ({ link, text }) => (
  <li>
    <a href={link} className="hover:text-blue-500">
      {text}
    </a>
  </li>
);