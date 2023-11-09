

function Results({bmi}){

    console.log(bmi)
    return(
        <div className='bg-gradient-to-r from-grad01 to-grad02 p-8 border-0 rounded-2xl text-white md:grid md:grid-cols-2 md:gap-6 md:rounded-r-[999px] md:rounded-l-[16px] '>
                <div>
                    <h3 className='text-m font-semibold'>Your BMI is...</h3>
                    <h2 className='text-hl font font-semibold tracking-tighter mt-2 mb-6 md:mb-0'>{bmi.bmi}</h2>
                </div>
                <div className="md:flex md:content-center md:flex-wrap">
                    <p className='text-s'>{bmi.message}</p>
                </div>
        </div>
    )
}
export default Results