import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img from "../../../assets/gallery/gallery1.jpg"

const TabsInfo = () => {
  return (
    <Tabs>
      <h1 className="text-center text-3xl font-bold mb-3 mt-3">Shop by Category</h1>
      <TabList>
      <Tab>Title 1</Tab>
      

      <Tab>Title 2</Tab>
      
            
      </TabList>

      <TabPanel>
      <img className="w-96 h-96" src={img} alt="" />
        <h2>Any content 11111111111111111</h2>
       
      </TabPanel>
      <TabPanel>
        <h2>Any content 222222222222222</h2>
        <img className="w-96 h-96" src={img} alt="" />
      </TabPanel>
    </Tabs>
  );
};

export default TabsInfo;
