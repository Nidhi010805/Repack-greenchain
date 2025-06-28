import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserNavbar from './components/Navbar/UserNavbar';
import RetailerNavbar from './components/Navbar/RetailerNavbar';
import PublicNavbar from './components/Navbar/PublicNavbar';
import Footer from './components/Footer';
import Leaderboard from "./components/Leaderboard";
import NotificationProvider from "./context/NotificationContext";

// Pages
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import RetailerDashboard from './pages/RetailerDashboard';
import AdminPanel from './pages/AdminPanel';
import SmartSuggest from './pages/SmartSuggest';
import Login from './pages/Login';
import ProductList from "./pages/ProductList";
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import MyReturns from './pages/MyReturns';
import UserSettings from "./pages/UserSettings";
import MyOrders from "./pages/MyOrders";
import Likes from "./pages/Likes";
import InitiateReturn from "./pages/InitiateReturn";
import Rewards from "./pages/Rewards";

// Footer linked pages
import About from './pages/About';
import Mission from './pages/Mission';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Help from './pages/Help';
import Faq from './pages/Faq';
import Shipping from './pages/Shipping';
import Hero from './components/Hero';

function App() {
 const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

const isAuthenticated = token && token !== "undefined" && token !== "";


  return (
    <NotificationProvider> 
    <Router>
      <div className="flex flex-col min-h-screen">

        {/* Navbar Switch */}
        {isAuthenticated && role === "user" && <UserNavbar />}
        {isAuthenticated && role === "retailer" && <RetailerNavbar />}
          {!isAuthenticated && <PublicNavbar />}


        <main className="flex-grow mt-20"> {/* Added margin for fixed navbar space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Hero" element={<Hero />} />
            
            {/* User Routes */}
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/settings" element={<UserSettings />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/likes" element={<Likes />} />
            <Route path="/my-returns" element={<MyReturns />} />
            <Route path="/initiate-return" element={<InitiateReturn />} />
            <Route path="/my-rewards" element={<Rewards />} />
            <Route path="/leaderboard" element={<Leaderboard />} />

            {/* Retailer Routes */}
            <Route path="/retailer/dashboard" element={<RetailerDashboard />} />

            {/* Common Pages */}
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/smart-suggest" element={<SmartSuggest />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />

            {/* Footer Pages */}
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
    </NotificationProvider> 
  );
}

export default App;
