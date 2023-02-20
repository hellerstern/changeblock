import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import FAQ from "./Pages/FAQ";
import Terms from "./Pages/Terms";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";
import ContactUs from "./Pages/ContactUs";

function Urls(props) {
    // const [token, setToken] = useState();

    // if (!token) {
    //     return <Login setToken={setToken} />;
    // }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/dashboard" element={<Dashboard />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<Signup />}></Route>
                <Route exact path="/faq" element={<FAQ />}></Route>
                <Route exact path="/terms" element={<Terms />}></Route>
                <Route exact path="/features" element={<Features />}></Route>
                <Route exact path="/pricing" element={<Pricing />}></Route>
                <Route exact path="/contact-us" element={<ContactUs />}></Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Urls;
