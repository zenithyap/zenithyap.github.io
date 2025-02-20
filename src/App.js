import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
