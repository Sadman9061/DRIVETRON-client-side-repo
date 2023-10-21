
import PropTypes from 'prop-types';
const BannerBrands = ({ brandName }) => {


    return (
        <div>
            {
                brandName === 'Nissan' ?
               
                <div className="carousel w-full h-[80vh] ">
                    <div id="slide1" className="carousel-item relative h-[80vh] w-full">
                        <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/ae/50/eb/ae50eb3a45884abb5741b970331f701e.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                                <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>


                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/ee/bf/dd/eebfddde84a3ab192df55f8b2f32566e.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                                <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/20/7f/1c/207f1c16b28ad474d74b27f7a91f01a1.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                                <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                            </div>

                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
                : brandName === 'Mitsubishi' ? 
                <div className="carousel w-full h-[80vh] ">
                <div id="slide1" className="carousel-item relative h-[80vh] w-full">
                    <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/79/78/c6/7978c67a561bdb743ecafa81fea15bfd.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                            <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">
                    <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/c5/d5/ea/c5d5ea8f6b17bce45eeaa9210d23b040.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                            <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/09/b5/4d/09b54da554b3c8e1e33a3a9b806cc4fd.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                            <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                        </div>

                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div> : brandName === 'Mercedes-Benz' ?
            <div className="carousel w-full h-[80vh] ">
            <div id="slide1" className="carousel-item relative h-[80vh] w-full">
                <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                    <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/95/39/a0/9539a003443229efc36bb4566bef0e85.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                        <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide2" className="carousel-item relative w-full">
                <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                    <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/d3/a8/f5/d3a8f583600941bbe5c4d93bd17f3be2.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                        <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                    <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/03/b1/35/03b1351d67efe8f2180f80230620d093.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                        <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                    </div>

                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div> : brandName === 'BMW'? 
        <div className="carousel w-full h-[80vh] ">
        <div id="slide1" className="carousel-item relative h-[80vh] w-full">
            <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/f5/37/7b/f5377b27147b743d715db0234520b8ff.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                    <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                </div>

            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>


        <div id="slide2" className="carousel-item relative w-full">
            <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/17/50/4d/17504d9fbc6a222406ae4c6806550e6f.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                    <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                </div>

            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/8c/b6/b0/8cb6b02789f83411bb77db45f6c53ee1.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                    <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
                </div>

            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>

    </div> : brandName ==='Toyota'?

<div className="carousel w-full h-[80vh] ">
<div id="slide1" className="carousel-item relative h-[80vh] w-full">
    <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/54/d6/26/54d626510abf47826031454f4cf118ee.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
            <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
        </div>

    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
</div>


<div id="slide2" className="carousel-item relative w-full">
    <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/5a/72/a2/5a72a2a442a839298ec38d8ad314049d.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
            <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
        </div>

    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
</div>
<div id="slide3" className="carousel-item relative w-full">
<div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/64/8f/c3/648fc32f512a8b7f0c40929848cf7bfe.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
            <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
        </div>

    </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
</div>

</div> :brandName === 'Honda' && 

<div className="carousel w-full h-[80vh] ">
    <div id="slide1" className="carousel-item relative h-[80vh] w-full">
        <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/94/9b/40/949b401e3895042440a30cb256aafc08.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
            </div>

        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div>


    <div id="slide2" className="carousel-item relative w-full">
        <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/d6/da/7c/d6da7caf4d491879a23de5b8fc0acc2b.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
            </div>

        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
        <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.pinimg.com/564x/33/b5/83/33b583b2637894a3911bf7bb8568397f.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/40 to-black/20"></div>
            </div>

        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>

</div>
                
}


            
        </div >
    );
};
BannerBrands.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    brandName: PropTypes.string
}
export default BannerBrands;