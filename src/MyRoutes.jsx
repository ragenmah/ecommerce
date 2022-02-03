import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPasswor from "./pages/auth/ForgetPasswor";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Cart from "./pages/Cart";
import Deals from "./pages/Deals";
import Homepage from "./pages/Homepage";
const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget/password" element={<ForgetPasswor />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
