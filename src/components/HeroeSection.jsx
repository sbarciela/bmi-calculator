import GameIcon from '../../assets/game-icon.svg'
import Form from './Form'

function HeroeSection({metric, toggleMetric, toggleImperial, result, bmiResult , bmi}){
    return(
    <div className='relative xl:flex ' >
        {/*title and description */}
        <div className="h-[640px] gradient1 rounded-b-lg flex flex-wrap justify-center content-start px-6 pt-8 md:px-[43px] xl:w-[70%] xl:h-[737px] xl:px-[140px] xl:pt-[75px] xl:pb-[200px] xl:flex-col xl:justify-between" >
            <div className='w-full flex justify-center xl:justify-start'><GameIcon className="text-iconmain xl:text-hxl" /></div>
            <div className='xl:max-w-[564px]'>
                <h1 className='text-hl font-semibold text-center py-6 text-gunmetal md:pt-10 xl:text-left xl:text-hxl xl:pt-0 xl:pb-[35px]'>Body Mass Index Calculator</h1>
                <p className=' text-m text-center text-darkelectric xl:text-left xl:max-w-[465px]'>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div>
        </div>

        {/*form */}
        <Form toggleMetric={toggleMetric} toggleImperial={toggleImperial} metric={metric} result={result} bmiResult={bmiResult} bmi={bmi}/>
       
    </div>
)}
export default HeroeSection