import Banner from "../Banner/Banner";
import TabsInfo from "../Tabs/TabsInfo";
import Gallery from "./Gallery";
import StatSection from "./StatSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      {/* for gallery section */}
      <Gallery></Gallery>

      <TabsInfo></TabsInfo>

      {/* for stat section */}
      <StatSection></StatSection>
    </div>
  );
};

export default Home;
