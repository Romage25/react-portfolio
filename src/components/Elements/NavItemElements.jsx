/* eslint-disable react/prop-types */
export default function NavItem({ link, text }) {
  return (
    <li>
      <a href={link} className="hover:text-blue-500">
        {text}
      </a>
    </li>
  );
}
