import "./App.css";
import About from "./component/about";
import Hero from "./component/hero";
import Services from "./component/services";
import Pricing from "./component/pricing";
import Contact from "./component/contact";
import NavBar from "./component/nav";
function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
