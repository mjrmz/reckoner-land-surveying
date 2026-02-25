import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-wrapper"> {/* <-- custom margin applied here */}
      <Navbar />

      <main>
        <Home />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;