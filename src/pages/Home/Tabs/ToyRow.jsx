import { Link } from "react-router-dom";

const ToyRow = ({ toy, handleDelete }) => {
  const { _id, name, selleremail, price, availabequantity, pictureurl } = toy;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={pictureurl} alt="" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{selleremail}</td>
      <td>{price}</td>
      <td>{availabequantity}</td>
      <td>
        {" "}
        <button
          onClick={() => handleDelete(_id)}
          className="mr-5 bg-pink-500 border-2 p-1"
        >
          Delete
        </button>
        <Link to={`/update/${toy._id}`}>
          <button className=" bg-pink-500 border-2 p-1 ">Update</button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
