import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Shop from './pages/Shop';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import { useState } from 'react';

function App() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
		<header className="bg-gray-900 text-white p-4 shadow-md">
		  <div className="max-w-6xl mx-auto flex justify-between items-center">
			<div className="flex items-center space-x-3">
			  <img src="/logo.png" alt="DynamicVent logo" className="h-10 w-auto" />
			  <h1 className="text-xl font-bold">DynamicVent</h1>
			</div>

			{/* Hamburger Button - shown on mobile */}
			<button
			  className="sm:hidden text-white focus:outline-none"
			  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
			>
			  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			  </svg>
			</button>

			{/* Desktop Menu */}
			<nav className="hidden sm:flex space-x-4">
			  <Link to="/">Home</Link>
			  <Link to="/how-it-works">How It Works</Link>
			  <Link to="/shop">Shop</Link>
			  <Link to="/faq">FAQ</Link>
			  <Link to="/contact">Contact</Link>
			</nav>
		  </div>

		  {/* Mobile Menu */}
		  {isMobileMenuOpen && (
			<div className="sm:hidden mt-2 flex flex-col space-y-2 px-4">
			  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
			  <Link to="/how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
			  <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
			  <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
			  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
			</div>
		  )}
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
