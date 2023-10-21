import { useLoaderData, useParams } from "react-router-dom";


const FaqDetails = () => {
    const param = useParams();
    console.log(param);
    const faq = useLoaderData();
    console.log(faq.answer.Steps);
    return (
        <div className="flex justify-center items-center mx-2 lg:mx-40 my-20">
            <div>
           <div className="flex items-center justify-center">
           <img  className='w-auto h-[60vh]' src={faq.image} alt="" />
           </div>
            <h1 className="text-3xl font-semibold text-slate-800 text-center my-10">{faq.answer.Title}</h1>
            <br />
            <p>{faq.answer.Introduction}</p>
            <br />
            {
                faq.answer.Steps?.map((step,idx) =><div key={idx}>
                    <h1>{step.Description}</h1>
                    
                    <h1>{step.Title}</h1>
                     </div> )
            }
            <br />
            <p>{faq.answer.Conclusion}</p>
            </div>
        </div>
    );
};

export default FaqDetails;