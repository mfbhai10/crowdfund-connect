import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components:
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Pages:
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import AddCoin from "./pages/AddCoin";
import Donate from "./pages/Donate";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white">
        <Navbar />

        <main className="flex-grow pt-[60px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/addcoin" element={<AddCoin />} />
            <Route path="/donate/:eventId" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
