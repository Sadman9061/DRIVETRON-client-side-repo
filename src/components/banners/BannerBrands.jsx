
import PropTypes from 'prop-types';
const BannerBrands = ({ brandName }) => {


    return (
        <div>
            {
                brandName === 'Nissan' ?
               
                <div className="carousel w-full h-[80vh] ">
                    <div id="slide1" className="carousel-item relative h-[80vh] w-full">
                        <div className="relative grid  w-full  flex-col items-end justify-center overflow-hidden  bg-white bg-clip-border text-center text-gray-700">
                            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/6rPCFJY/download-3.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/nwtV4nk/download-4.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/6YVdQ22/download-5.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/pZK2SbB/download-6.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/TbHtVDm/download-7.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/9hy3xmp/download.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                    <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/6PH88y9/download-1.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                    <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/NjbJGwQ/download-2.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                    <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/2qBGL7D/download-3.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/3pyddh4/download-5.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/D1PByLZ/download-6.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
                <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/TKBVHWk/download-8.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/DgZxMqR/download-9.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/vY2j0sH/download.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
        <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/yn0NpNB/download-10.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/Xzj4Mh0/download-1.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/80pkvg3/download-7.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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
            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBD7-gYUrkEUl7r2fVdsstEqXXS1NHvGfSSA&usqp=CAU')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
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