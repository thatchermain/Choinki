import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
