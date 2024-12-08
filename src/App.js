import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { useState } from "react";
import StickyImg from "./components/StickyImg";
import Footer from "./components/Footer";
import Containers from "./components/Containers";
import Testimonials from "./components/Testimonials";

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const linkEnter = () => setCursorVariant("hover");
  const textEnter = () => setCursorVariant("text");
  const cursorLeave = () => setCursorVariant("default");

  return (
    <>
      <Cursor cursorVariant={cursorVariant} />
      <Navbar />
      <Header textEnter={textEnter} cursorLeave={cursorLeave} />
      <main>
        <StickyImg linkEnter={linkEnter} cursorLeave={cursorLeave} />
        <Containers textEnter={textEnter} cursorLeave={cursorLeave} />
      </main>

      <section className="px-6 py-28">
        <hr></hr>
      </section>

      <section>
        <Testimonials textEnter={textEnter} cursorLeave={cursorLeave} />
      </section>
      <Footer />
    </>
  );
}

export default App;
