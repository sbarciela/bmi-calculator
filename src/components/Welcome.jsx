function Welcome(){
    return(
        <div className='bg-gradient-to-r from-grad01 to-grad02 p-8 border-0 rounded-2xl text-white md:grid md:grid-cols-1 md:gap-4 md:rounded-r-[999px] md:rounded-l-[16px] '>
            <div>
                <h3 className='text-hm font-semibold'>Welcome!</h3>
            </div>
            <div className="md:flex md:content-center md:flex-wrap">
                <p className='text-s'>Enter your height and weight and you'll see your BMI result here</p>
            </div>
        </div>
    )
}
export default Welcome