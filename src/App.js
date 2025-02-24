import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
