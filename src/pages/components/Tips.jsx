import Barbell from '../../assets/barbell.svg'
import Food from '../../assets/food.svg'
import Moon from '../../assets/moon-stars.svg'


function Tips (){
    return(
        <div className="grid grid-cols-1 gradient gap-10 px-6 py-14 md:px-[43px] md:py-[60px] md:mt-24 xl:grid-cols-3 xl:px-[140px] xl:py-[72px]">
            {/*food*/}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[60px_auto] xl:grid-cols-1 xl:gap-[45px]">
                <div className='md:flex md:items-center'>
                    <div className='w-16 h-16 bg-pink flex justify-center items-center border-0 rounded-full '>   
                        <Food className="text-icon"/>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-hm font-semibold text-gunmetal tracking-tighter">Healthy eating</h3>
                    <p className="text-m text-darkelectric mt-6">Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
                </div>
            </div>

            {/*exercise */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[60px_auto] xl:grid-cols-1 xl:gap-[45px]">
                <div className='md:flex md:items-center'>
                    <div className='w-16 h-16 bg-orange flex justify-center items-center border-0 rounded-full '>   
                        <Barbell className="text-icon"/>
                    </div>
                </div>
                <div>
                    <h3 className="text-hm font-semibold text-gunmetal tracking-tighter">Regular exercise</h3>
                    <p className="text-m text-darkelectric mt-6">Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
                </div>
            </div>

            {/*sleep*/}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[60px_auto] xl:grid-cols-1 xl:gap-[45px]">
                <div className='md:flex md:items-center'>
                    <div className='w-16 h-16 bg-bluemoon flex justify-center items-center border-0 rounded-full '>   
                        <Moon className="text-icon"/>
                    </div>
                </div>
                <div>
                    <h3 className="text-hm font-semibold text-gunmetal tracking-tighter">Adequate sleep</h3>
                    <p className="text-m text-darkelectric mt-6">Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
                </div>
            </div>

            

        </div>
    )
}

export default Tips