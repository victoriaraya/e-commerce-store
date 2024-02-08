import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Details from "./pages/Details";
import Welcome from "./pages/Welcome";
import CartProvider from "./contexts/CartContext";
import Hobbies from "./pages/Hobbies";
import Wellness from "./pages/Wellness";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import SignIn from "./pages/SIgnIn";
import Register from "./pages/Register";
import WelcomeNewUser from "./pages/WelcomeNewUser";
import WelcomeBack from "./pages/WelcomeBack";
import SignOut from "./pages/SignOut";
import SignInProvider from "./contexts/SignInContext";

const App = () => {
  return (
    <BrowserRouter>
      <SignInProvider>
        <CartProvider>
          <header>
            <Link to="/" className="brand">
              Victoria's Shop
            </Link>
            <NavBar />
          </header>
          <div className="content">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/wellness" element={<Wellness />} />
              <Route path="/home" element={<Home />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sign-out" element={<SignOut />} />
              <Route path="/welcome" element={<WelcomeNewUser />} />
              <Route path="/welcome-back" element={<WelcomeBack />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
          </div>
          <footer className="footer">
            <div>
              <h5 className="disclaimer">
                💖 This website is just for fun and the products here are not
                actually available to buy 💖
              </h5>
              <h5 className="made-by">Made by Victoria Raya</h5>
            </div>
          </footer>
        </CartProvider>
      </SignInProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
