import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";



const Login = () => {
    const navigate=useNavigate();
    const { signInUser,googleSignin }=useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        // const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
            navigate("/")

        })
        .catch(error=>{
            console.log("Error",error.message)
        })
    }
    const handleGoogleSign = () =>{
        googleSignin()
        .then(result=>{
            console.log(result.user)
            navigate("/")
        })
        .catch(error=>{
            console.log("Error",error.message)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handleLogin} className="card-body">
                  {/* <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div> */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                  <p className="ml-7 mb-4">New here ? <button className="btn btn-accent"><Link to="/register">Register</Link></button></p>
                  <p>
                    <button onClick={handleGoogleSign} className="btn btn-ghost">Google</button>
                  </p>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Login;