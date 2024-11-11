import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Register = () => {
    const navigate=useNavigate();

    const { createUser } = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
            navigate("/")
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
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
                      <input type="password" name="password"  placeholder="password" className="input input-bordered" required />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Register</button>
                    </div>
                  </form>
                  <p className="ml-7 mb-4 mr-3">Already have an account ? <button className="btn btn-accent"><Link to="/login">Login</Link></button></p>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Register;