import About from "./components/About";
import Nabar from "./components/Nabar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Properties from "./components/Properties";

function App(props) {
  return (
    <div>
      <About />
      <Nabar/>
      <Hero />
      <WhyChooseUs />
      <Properties/>
    </div>
  );
}

export default App;