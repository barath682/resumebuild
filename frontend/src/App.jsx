import React from "react";
import Header from "./components/Header";
import ResumeBuilder from "./components/ResumeBuilder";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ResumeBuilder />
      <Footer />
    </div>
  );
}

export default App;
