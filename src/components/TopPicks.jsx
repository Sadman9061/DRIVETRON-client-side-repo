import { Link, useLoaderData} from "react-router-dom";




const TopPicks = () => {
    const brands = useLoaderData();
    console.log(brands[0].image);
    
    
    return (
        <div>
            <h1 className="text-3xl font-semibold  my-20 text-center">Top Picks</h1>




            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mx-2 lg:mx-12">
                {
                    brands.map(brand =>
                        <Link to={`/brand/${brand.brandName}`} key={brand._id}>
                        <div >
                        {/* 11111111111111111111111111111 */}
    
                        <div className="relative grid h-[600px] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center ">
                            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center  shadow-none`}>
                                <img src={brand.image} className="h-full w-full" alt="" />
                                <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/20 to-black/60"></div>
                            </div>
                            <div className="relative p-6 px-6 py-14 md:px-12">
                                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                   {brand.brandName}
                                </h2>
    
    
                            </div>
                        </div>
    
                    </div>
                        </Link> )
                }
               

              
            </div>

        </div>
    );
};

export default TopPicks;