import React, { useState } from "react";
import Sidebar from "./component/Layout/Sidebar";
import Heros from "./sections/Heros";
import About from "./sections/About";

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
      </main>
    </div>
  );
}

export default App;
