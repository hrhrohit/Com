import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMob from "./Components/Navbar/NavbarMob";
import Tablet from "./Components/ServiceComponent/Services";
import ServicesDesktop from "./Components/ServiceComponentMain/DeskTab";
import ErrorBoundary from "./ErrorBoundary";
import { useWindowWidth } from "./breakpoints";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const screenWidth = useWindowWidth();
  return (
    <ErrorBoundary>
      <Router>
        {screenWidth >= 1024 ? <Navbar /> : <NavbarMob />}
        <Routes>
          <Route path="/Com" element={<Landing />} />
          {screenWidth >= 1024 ? <Route path="Com/services" element={<Tablet />} /> : null}
          <Route path="Com/service-details" element={<ServicesDesktop />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
