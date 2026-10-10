import React, { useState } from "react";
import Sidebar from "./component/Layout/Sidebar";
import Heros from "./sections/Heros";
import About from "./sections/About";
import Works from "./sections/Works";
import Contact from "./sections/Contact";
import Expe from "./sections/Expe";
function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-[#35364a] font-sans antialiased">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <Heros />
        <About/>
                <Works/>
            <Contact/>
           < Expe />
      </main>
    </div>
  );
}

export default App;
