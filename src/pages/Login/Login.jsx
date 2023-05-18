import { Link } from "react-router-dom";
import logImg from "../../assets/login.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin = event=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, email, password)
        
        signIn(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error => console.log(error))

    }
   
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center mr-10 h-1/2 w-1/2">
          
          <img src={logImg} alt="" />
        </div>
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-full">
          <div className="card-body w-full">
          <h1 className="text-3xl font-bold text-center text-pink-500">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-accent"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>

            <p className="my-4 text-center">New to car doctors <Link className="font-bold text-pink-500" to='/signup'>Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
