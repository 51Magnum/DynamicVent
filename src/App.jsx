import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Shop from './pages/Shop';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <header className="bg-gray-900 text-white p-4 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">DynamicVent</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/how-it-works" className="hover:underline">How It Works</Link>
              <Link to="/shop" className="hover:underline">Shop</Link>
              <Link to="/faq" className="hover:underline">FAQ</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto py-10 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} DynamicVent. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
