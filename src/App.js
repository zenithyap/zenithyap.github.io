import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
    </div>
  );
}

export default App;
