import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ContactInfo from "./Components/ContactInfo";
import Footer from "./Components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="min-h-screen flex flex-col justify-between antialiased font-['Inter',sans-serif]">
      <div>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main>
          <Hero activeTab={activeTab} />
          <ContactInfo activeTab={activeTab} />
        </main>
      </div>
      {/* FIXED: Passing down setActiveTab to control global navigation from the bottom */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;