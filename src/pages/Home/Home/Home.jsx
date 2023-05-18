import Banner from "../Banner/Banner";
import Gallery from "./Gallery";
import StatSection from "./StatSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            {/* for gallery section */}
            <Gallery></Gallery>

               {/* for stat section */}
            <StatSection></StatSection>
        </div>
    );
};

export default Home;