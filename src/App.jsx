import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <Header />
      </div>
      <Main />
      <Footer />
    </>
  );
}
