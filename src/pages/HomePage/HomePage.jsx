import About from "../../components/About/About";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = (props) => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Gallery></Gallery>
    </div>
  );
};
export default HomePage;
