import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";

import { Routes, Route} from 'react-router-dom';
import HomePage from "./pages/Home.page";
import FAQPage from "./pages/FAQ.page";
import AboutUsPage from "./pages/AboutUs.page";
import LoginPage from "./pages/Login.page";

function App() {
  return (
    <div> 
      {/* Navbar */}
      <NavbarComponent></NavbarComponent>

      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route   path="/"  element = {<HomePage />}/>
          <Route   path="/faq"  element = {<FAQPage />}/>
          <Route   path="/about-us"  element = {<AboutUsPage />}/>
          <Route   path="/login"  element = {<LoginPage />}/>

        </Routes>

      </div>

      {/* Footer */}
      <FooterComponent></FooterComponent>

    </div>
  );
}

export default App;

// /
//*/faq
//*/about-us
//*/login
