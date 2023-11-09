'use client'
import RadioActive from '../../assets/radioActive.svg'
import Radio from '../../assets/radio.svg'
import Results from './Results'
import Welcome from './Welcome'
import InputsImperial from './InputsImperial'
import ImputsMetric from './InputsMetric'






function Form({metric, toggleMetric, toggleImperial, result, bmiResult, bmi}){



    


    return(
    <div className='px-6 absolute top-[471px] right-0 left-0 
     md:top-[298px] md:px-[43px]
     xl:p-0 xl:top-[166px] xl:left-[736px] xl:z-10'>
        <div className='p-6  bg-white shadow border-0 rounded-2xl m-auto max-w-[686px] md:p-8 xl:max-w-[564px]'>
            <h2 className='text-hm font-semibold text-gunmetal tracking-tighter mr-auto'>Enter your details below</h2>
            
            {/*metric or imperial */}
            <div className='grid grid-cols-2 gap-6 py-6 md:py-8'>
                <div className='flex flex-wrap  items-center cursor-pointer ' onClick={toggleMetric}>
                    {metric?<RadioActive className="text-icon hover:border hover:text-blue" />:<Radio className=" text-icon  !text-inactiveRadio hover:!text-blue"/>}
                    <span className='text-m font-bold text-gunmetal ml-[18px]'>Metric</span>
                </div>
                <div className='flex flex-wrap  items-center cursor-pointer' onClick={toggleImperial}> 
                    {!metric?<RadioActive className="text-icon hover:border hover:text-blue" />:<Radio className=" text-icon !text-inactiveRadio hover:!text-blue"/>}
                    <span className='text-m font-bold text-gunmetal ml-[18px]'>Imperial</span>
                </div>
            </div>


            {/*inputs metric or imperial*/}
            {metric?<ImputsMetric bmiResult={bmiResult} />:<InputsImperial bmiResult={bmiResult} />}
                       

            {/*result */}
            {result===false?<Welcome/>:<Results bmi={bmi} />}
            
            
        </div>
    </div>
    
    )
}

export default Form