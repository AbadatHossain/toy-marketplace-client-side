import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";

const ToyCard = () => {
  const toys = useLoaderData();

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure to delete");
    if (proceed) {
      fetch(`http://localhost:5000/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
          }
        });
    }
  };

  return (
    <div>
      <h1>{toys.length}</h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToyRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></ToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToyCard;
