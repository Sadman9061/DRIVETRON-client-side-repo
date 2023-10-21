// import { useState } fr
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const cartsData = useLoaderData();
    const [carts,setCarts] = useState(cartsData) 
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/myCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = cartsData.filter(cof => cof._id !== _id);
                            setCarts(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="mb-20">
            <h1 className="text-3xl  my-20 text-center">My Cart</h1>
            <div>
                
                {
                    carts.length == 0 ?

                       
                        
                        <div className="flex justify-center my-10"><p className="text-2xl text-slate-400 my-20 text-center">☹ No Items Found</p></div>

                        :

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mx-2 lg:mx-12">
                        {
                            carts?.map(cart =>
                                <div key={cart._id} className="w-full h-full card lg:card-side bg-[#d8fdf0] shadow-xl border-2 border-black">
                                    <figure><img className="w-[380px] h-full" src={cart.Photo} alt="" /></figure>
                                    <div className="card-body text-black ">
                                        <h2 className="card-title font-semibold ">Brand Name: {cart.Brand} </h2>
                                        <p><span className="font-medium">Name:</span> {cart.Name}</p>
                                        <p><span className="font-medium">Type:</span> {cart.Type}</p>
                                        <p><span className="font-medium">Price:</span> {cart.Price}</p>
                                        <p><span className="font-medium">Rating:</span> {cart.Rating}</p>
                                        <div className="">
                                            <Link to={`/update/${cart._id}`}> <button className="btn block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold    transition-all hover:shadow-lg hover:shadow-[#52e4e4] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  btn-primary bg-gradient-to-r from-[#52e4e4] to-blue-500 mt-4 hover:from-[#30e0e0] hover:to-[#3273fd] border-none rounded-full  text-black  ">Update</button></Link>
                                            <Link to={`/productDetails/${cart._id}`}> <button className=" block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   transition-all hover:shadow-lg hover:shadow-[#52e4e4] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-primary bg-gradient-to-r from-[#52e4e4] to-blue-500 mt-4 hover:from-[#30e0e0] hover:to-[#3273fd] border-none rounded-full text-black  ">Details</button></Link>
                                            <button onClick={()=>handleDelete(cart._id)}  className=" block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   transition-all hover:shadow-lg hover:shadow-[#52e4e4] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-primary bg-gradient-to-r mt-4 from-[#ff8d5f] to-red-500 border-none rounded-full text-base-300  ">Delete</button>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        }
                    </div>




                }

            </div>
        </div>
    );
};

export default MyCart;