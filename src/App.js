import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <AboutPage></AboutPage>
      <Skills></Skills>
    </div>
  );
}

export default App;
