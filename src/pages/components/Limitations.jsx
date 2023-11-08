import Baby from '../../assets/baby.svg'
import Biceps from '../../assets/biceps.svg'
import Age from '../../assets/cake.svg'
import Gender from '../../assets/gender.svg'
import Person from '../../assets/person.svg'
import Image from 'next/image'

function Limitations(){
    return(
        <div className="grid grid-cols-1 px-6 py-[72px] gap-4
                        md:py-24 md:grid-cols-4 md:gap-[15px]
                        xl:py-[120px] xl:px-[140px] xl:gap-8
                        xl:grid-cols-12 xl:relative
                        ">
            {/**header */}
            <div className='text-center mb-10 md:mb-14 md:col-span-4 xl:col-span-6 xl:text-left'>
                <h2 className='text-[32px] text-gunmetal tracking-tighter font-semibold mb-8 xl:text-hl'>Limitations of BMI</h2>
                <p className='text-m text-darkelectric  xl:text-left'>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
            </div>

            {/**card1 */}
            <div className='p-6 border-0 rounded-2xl shadow md:p-8 md:col-span-2 xl:col-span-4 xl:col-start-8 '>
                <div className='flex items-center mb-4'>
                    <Gender className="text-icon" />
                    <h3 className='text-hs font-semibold text-gunmetal ml-4'>Gender</h3>
                </div>
                <p className='text-m text-darkelectric'>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
            </div>

            {/**arrow */}
            
            <div className='hidden xl:block xl:absolute top-[371px] left-[305px]'>
                <Image
                        src="/arrow1.png"
                        width={85}
                        height={200}
                        alt="Arrow"
                        className='-scale-x-1 -rotate-12'
                />      
            </div>
            

            {/**card2 */}
            <div className='p-6 border-0 rounded-2xl shadow md:p-8 md:col-span-2 xl:col-span-4 xl:col-start-5' >
                <div className='flex items-center mb-4'>
                    <Age className="text-icon"/>
                    <h3 className='text-hs font-semibold text-gunmetal ml-4'>Age</h3>
                </div>
                <p className='text-m text-darkelectric'>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
            </div>

            {/**card3 */}
            <div className='p-6 border-0 rounded-2xl shadow md:p-8 md:col-span-2 xl:col-span-4'>
                <div className='flex items-center mb-4'>
                    <Biceps className="text-icon" />
                    <h3 className='text-hs font-semibold text-gunmetal ml-4'>Muscle</h3>
                </div>
                <p className='text-m text-darkelectric'>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
            </div>

            {/**card4 */}
            <div className='p-6 border-0 rounded-2xl shadow md:p-8 md:col-span-2 xl:col-span-4 xl:col-start-3'>
                <div className='flex items-center mb-4'>
                    <Baby className="text-icon" />
                    <h3 className='text-hs font-semibold text-gunmetal ml-4'>Pregnancy</h3>
                </div>
                <p className='text-m text-darkelectric'>Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
            </div>

            {/**card5 */}
            <div className='p-6 border-0 rounded-2xl shadow md:p-8 md:col-span-2  md:col-start-2 xl:col-span-4 xl:col-start-7'>
                <div className='flex items-center mb-4'>
                    <Person className="text-icon" />
                    <h3 className='text-hs font-semibold text-gunmetal ml-4'>Race</h3>
                </div>
                <p className='text-m text-darkelectric'>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
            </div>


        </div>
    )
}

export default Limitations