// client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Pages
import Home from './pages/Home';
import ScanReturn from './pages/ScanReturn';
import UserDashboard from './pages/UserDashboard';
import RetailerDashboard from './pages/RetailerDashboard';
import AdminPanel from './pages/AdminPanel';
import SmartSuggest from './pages/SmartSuggest';
import Login from './pages/Login';
import Products from "./pages/Products";
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import MyReturns from './pages/MyReturns';

// Footer linked pages
import About from './pages/About';
import Mission from './pages/Mission';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Help from './pages/Help';

import Faq from './pages/Faq';
import Shipping from './pages/Shipping';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scan-return" element={<ScanReturn />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
             <Route path="/retailer/dashboard" element={<RetailerDashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/smart-suggest" element={<SmartSuggest />} />
          
             <Route path="/my-returns" element={<MyReturns />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />


            {/* Footer pages */}
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<Help />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/shipping" element={<Shipping />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;