import CategoryTab from "../../CategoryTab/CategoryTab";
import Banner from "../Banner/Banner";
import Gallery from "./Gallery";
import StatSection from "./StatSection";
import AosComp from "../../Aos/AosComp";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      {/* for gallery section */}
      <Gallery></Gallery>
      <AosComp></AosComp>


      <CategoryTab></CategoryTab>
      
      {/* for stat section */}
      <StatSection></StatSection>
    </div>
  );
};

export default Home;
