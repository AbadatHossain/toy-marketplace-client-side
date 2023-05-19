const AddToy = () => {
  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sellername = form.sellername.value;
    const selleremail = form.selleremail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availabequantity = form.availabequantity.value;
    const description = form.description.value;
    const subcategory = form.subcategory.value;
    const pictureurl = form.pictureurl.value;

    // const password = form.password.value
    const toys = {
      name,
      sellername,
      selleremail,
      price,
      rating,
      availabequantity,
      description,
      subcategory,
      pictureurl,
    };
    console.log(toys);

    fetch(`http://localhost:5000/addtoys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Toys book successfully");
        }
      });
  };
  return (
    <div className="  bg-base-200">
      <h1 className="text-3xl font-bold text-center text-pink-500">Add Toy!</h1>
      <div className="flex-col lg:flex-row px-3">
        <form onSubmit={handleAdd} className="grid grid-cols-2 w-auto gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellername"
              placeholder="sellername"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              name="selleremail"
              placeholder="selleremail"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Availabe Quantity</span>
            </label>
            <input
              type="number"
              name="availabequantity"
              placeholder="availabequantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="description"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Subcategory</span>
            </label>
            <input
              type="text"
              name="subcategory"
              placeholder="subcategory"
              className="input input-bordered"
            />
          </div>

          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Subcategory</span>
            </label>
            <select className="select select-bordered ">
              <option disabled selected>
                Subcategory
              </option>
              <option>Baby dolls</option>
              <option>Barbie</option>
              <option>American girl</option>
            </select>

            
          </div> */}
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">pictureurl</span>
            </label>
            <input
              type="text"
              name="pictureurl"
              placeholder="pictureurl"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-9 mb-3">
            <input className="btn btn-accent" type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
    //   </div>
    //   </div>
  );
};

export default AddToy;
