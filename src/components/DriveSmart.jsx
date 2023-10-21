
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";


const DriveSmart = () => {
    const faq = useLoaderData();

 
    return (
        <div>
            <h1 className="text-3xl font-semibold  my-20 text-center">Drive Smart</h1>
            <Marquee pauseOnHover={true} speed={40}>

                {
                    faq.map(faqSingle =>
                    <Link key={faqSingle._id} to={`/faq/${faqSingle._id}`} >
                            <div  className="relative grid h-[200px] w-[350px] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                                <div className={`absolute inset-0 m-0 overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                                    <img className="w-full" src={faqSingle.image} alt="" />
                                    <div className="absolute inset-0  w-full h-full  to-bg-black-10  bg-gradient-to-l from-black/20 to-black/60"></div>
                                </div>
                                <div className="relative p-6  py-14 ">
                                    <h2 className="mb-6 block font-sans text-sm font-medium leading-[1.5] tracking-normal text-white antialiased">
                                        Q: {faqSingle.question}

                                    </h2>


                                </div>
                            </div>
                        </Link>)
                }

            </Marquee>


        </div>
    );
};

export default DriveSmart;