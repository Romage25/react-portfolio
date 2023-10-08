import { useEffect } from "react";
import Navbar from "./Navbar.jsx";

export default function Header() {
  useEffect(() => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);
  return (
    <div className="flex flex-row justify-between px-20 py-3 shadow-xl bg-blue-200">
      <h1 className="text-2xl">RODELSKIE</h1>
      <Navbar />
    </div>
  );
}
