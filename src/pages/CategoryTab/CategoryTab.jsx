import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryTab = () => {
  // sellername, price, availabequantity, pictureurl

  const [toys, setToys] = useState([]);
  // const { _id, name } = toy
  console.log(toys);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => {
        return res
          .json()
          .then((data) => {
            setToys(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-5">Category Tab</h1>

      <Tabs>
        <TabList>
          <Tab>Baby Dolls</Tab>
          <Tab>Barbie</Tab>
          <Tab>American Dolls</Tab>
        </TabList>

        <TabPanel>
          <div className="flex gap-5">
            {toys.filter(toy => toy.subcategory === "Baby Dolls").map((toy) => (
                <div key={toy._id} className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={toy.pictureurl}
                      alt={toy.name}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>{toy.description}</p>
                    <div className="card-actions justify-end">
                        <a href={"/product/" + toy._id} className="btn btn-primary">View Dtails</a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex gap-5">
            {toys.filter(toy => toy.subcategory === "Barbie").map((toy) => (
                <div key={toy._id} className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={toy.pictureurl}
                      alt={toy.name}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>{toy.description}</p>
                    <div className="card-actions justify-end">
                        <a href={"/product/" + toy._id} className="btn btn-primary">View Dtails</a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex gap-5">
            {toys.filter(toy => toy.subcategory === "American girl").map((toy) => (
                <div key={toy._id} className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={toy.pictureurl}
                      alt={toy.name}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>{toy.description}</p>
                    <div className="card-actions justify-end">
                      <a href={"/product/" + toy._id} className="btn btn-primary">View Dtails</a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTab;
