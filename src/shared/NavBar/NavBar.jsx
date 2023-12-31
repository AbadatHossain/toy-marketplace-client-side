import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItenms = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/addtoys">Add a Toys</Link>
      </li> */}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/toys">All Toys</Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link to="/toys">My Toys</Link>
          </li>

          <li>
        <Link to="/addtoys">Add a Toys</Link>
      </li>
          <li>
            <button onClick={handleLogOut}>
              Logout {user?.name}
              <div className="avatar w-10 h-10">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-pink-500 h-15">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItenms}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-20 h-15 rounded-2xl mr-3" src={logo} alt="" />
          <p>Toy Marketplace</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItenms}</ul>
      </div>
    </div>
  );
};

export default NavBar;
