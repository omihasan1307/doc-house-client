import Banner from "./Banner";
import Services from "./Services";
import Address from "./Address";
import Reviews from "./Reviews";
import ExpertsDoctors from "./ExpertsDoctors";
import Contact from "./Contact";
import About from "./About";
import MedicalTeam from "./MedicalTeam";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Address />
      <Reviews />
      <ExpertsDoctors />
      <About />
      <Contact />
      <MedicalTeam />
    </div>
  );
};

export default Home;
