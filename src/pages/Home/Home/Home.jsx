import Banner from "../Banner/Banner";
// import TabCard from "../Tabs/TabCard";
// import TabsInfo from "../Tabs/TabsInfo";
import Gallery from "./Gallery";
import StatSection from "./StatSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      {/* for gallery section */}
      <Gallery></Gallery>

      {/* <TabsInfo></TabsInfo>
      <TabCard></TabCard> */}

      {/* for stat section */}
      <StatSection></StatSection>
    </div>
  );
};

export default Home;
