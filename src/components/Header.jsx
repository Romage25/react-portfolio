import Navbar from "./Navbar.jsx";

export default function Header() {
  return (
    <div className="flex flex-row justify-between px-20 py-5 shadow-xl bg-blue-200">
      <h1 className="text-2xl">RODELSKIE</h1>
      <Navbar />
    </div>
  );
}
