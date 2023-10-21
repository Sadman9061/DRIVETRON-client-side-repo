import { Link, useLoaderData, useLocation } from "react-router-dom";
import BannerBrands from "../components/banners/BannerBrands";


const BrandDetails = () => {
  const products = useLoaderData();
  const location = useLocation();
  const brandName = location.pathname.split('/')[2];
  // console.log(brandName)
  // console.log(products[1].Brand);
  const filtered = products?.filter(product => brandName.toLowerCase() === product.Brand.toLowerCase())
  console.log(filtered ? 'true?':'false');
  return (
    <div className="bg-base-200">
      <BannerBrands brandName={brandName}></BannerBrands>
      <h1 className='text-3xl  font-semibold text-center my-20'>Featured Products</h1>

     
        {
          filtered.length == 0? 
          (<div className="flex justify-center items-center  "><p className=" text-base md:text-2xl lg:text-7xl text-black-900 font-light mb-20  ">😥 No Products Found</p></div> )
          :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mx-2 lg:mx-12">
         {
           filtered?.map(filter => <div key={filter._id} className="w-full h-full card lg:card-side bg-[#d8fdf0] shadow-xl border-2 border-black">
           <figure><img className="w-[380px] h-full" src={filter.Photo} alt=""/></figure>
           <div className="card-body text-black">
             <h2 className="card-title font-semibold ">Brand Name: {filter.Brand} </h2>
             <p><span className="font-medium">Name:</span> {filter.Name}</p>
             <p><span className="font-medium">Type:</span> {filter.Type}</p>
             <p><span className="font-medium">Price:</span> {filter.Price}</p>
             <p><span className="font-medium">Rating:</span> {filter.Rating}</p>
             <div className="card-actions justify-end ">
              <Link to={`/update/${filter._id}`}> <button className="btn block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold    transition-all hover:shadow-lg hover:shadow-[#52e4e4] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  btn-primary bg-gradient-to-r from-[#52e4e4] to-blue-500 hover:from-[#30e0e0] hover:to-[#3273fd] border-none rounded-full  text-black  ">Update</button></Link>
              <Link to={`/productDetails/${filter._id}`}> <button className=" block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   transition-all hover:shadow-lg hover:shadow-[#52e4e4] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-primary bg-gradient-to-r from-[#52e4e4] to-blue-500 hover:from-[#30e0e0] hover:to-[#3273fd] border-none rounded-full text-black  ">Details</button></Link>
             </div>
           </div>
         </div> ) 
         }
        </div>
        }
     

    </div>
  );
};

export default BrandDetails;