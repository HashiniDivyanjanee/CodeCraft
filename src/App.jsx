import "./App.css";
import About from "./component/about";
import Hero from "./component/hero";
import Services from "./component/services";
import Pricing from "./component/pricing";
import Contact from "./component/contact";
import WorkingStep from "./component/workingStep";
import NavBar from "./component/nav";
import Testimonial from "./component/testimonial";
import Footer from "./component/footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Services />
      <About />
      <WorkingStep />
      <Pricing />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
