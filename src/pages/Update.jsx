import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const updateData= useLoaderData();
    
    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const Photo = form.photo.value;
        const Name = form.name.value;
        const Brand  = form.brandName .value;
        const Category = form.type.value;
        const Price  = form.price .value;
        const Rating = form.rating.value;
        
        console.log(updateData.Type);
        const updatedProduct = { Photo, Name, Brand,  Price, Rating ,Category}

        console.log(updatedProduct);

              // send data to the server
              fetch(`https://assignment-10-server-side-qzoojvm75-sadman-sakib-azads-projects.vercel.app/products/${updateData._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Product Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
    
    }

  
    return (
  
        <div>

            <div className="bg-[#abb5ee]  p-5 md:p-24">
            <h2 className="text-3xl font-semibold text-slate-800 text-center">Update Coffee: {updateData.Name}</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={updateData.Photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={updateData.Name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" defaultValue={updateData.Brand} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Type </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={updateData.Type} placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={updateData.Price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={updateData.Rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
                <input type="submit" value="Update Product" className="block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   transition-all hover:shadow-lg hover:shadow-[#52e4e4] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-primary bg-gradient-to-r from-[#52e4e4] to-blue-500 hover:from-[#30e0e0] hover:to-[#3273fd] border-none rounded-full text-black  " />

            </form>
        </div>

        </div>
    );
};

export default Update;