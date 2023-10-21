import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
           <h1 className="text-base md:text-2xl lg:text-7xl text-center mt-64 text-slate-800  font-light">Oops! Error 404 😕</h1> 
          <div className="flex justify-center mt-10">
          <Link  to={'/'} ><button className="btn btn-outline ">Go Home</button></Link>
          </div>
        </div>
    );
};

export default Error;