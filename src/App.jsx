import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          {" "}
          <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar></Navbar>
          <Hero></Hero>

          <About></About>
          <Tech></Tech>
          <Project></Project>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
