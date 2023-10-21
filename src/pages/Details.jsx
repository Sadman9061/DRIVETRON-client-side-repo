import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const productDetails = useLoaderData();
    console.log(productDetails);


    const handleAddCart = event => {
        event.preventDefault();

       
        fetch('https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/createCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: ' Added To Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

        }


    return (
        <div className="mx-2 lg:mx-20">
            <h1 className="text-3xl text-center font-semibold  my-20 ">Product Details</h1>
            <div className="flex justify-center items-center my-20">
            <div >
            <img src={productDetails.Photo} className="mb-5" alt="" />
            <Link onClick={handleAddCart} to={'/myCart'}><button className="block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-md shadow-[#b0dddd] transition-all hover:shadow-lg hover:shadow-[#52e4e4] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-primary bg-gradient-to-r from-[#52e4e4] to-blue-500 hover:from-[#30e0e0] hover:to-[#3273fd] border-none rounded-full text-black  ">Add To Cart</button></Link>
            </div>
            </div>
           <div className="flex justify-center text-xl font-medium">
          <div className="text-start space-y-3 mb-10">
          <p>Brand : {productDetails.Brand}</p>
            <p>Name : {productDetails.Name}</p>
            <p>Rating : {productDetails.Rating}</p>
            
            <p>Price : ${productDetails.Price}</p>
            <p>Type : {productDetails.Type}</p>
          </div>
           </div>
           
          
            <p className="text-xl font-medium mb-10 leading-8"><span className="text-2xl font-bold">Info : </span>{productDetails.ShortDescription}</p>
           
            
        </div>
    );
};

export default Details;