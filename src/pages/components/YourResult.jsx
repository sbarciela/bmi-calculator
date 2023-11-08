import Image from 'next/image'
import Arrow from '../../assets/arrow.svg'



function YourResult({result, database}){

    
    let message
    if(!result || result.bmi==0){
        message=database[0]
    }else if(result){
        message=database.find((element)=>element.weightType==result.weightType)
    }

  


    return (
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-[75px] md:relative md:right-[43px] xl:mx-[140px] xl:right-0 xl:gap-[131px]'>
             <Image
                    src="/arrow1.png"
                    width={85}
                    height={200}
                    alt="Arrow"
                    className='hidden right-[27px] -top-[110px] xl:block xl:absolute'
                />
            <div className='flex flex-wrap justify-center relative w-full'>
                <Image
                    src="/image-01.png"
                    width={468}
                    height={533}
                    alt="Picture of the author"
                    className='z-10'
                />
                <div className='bg-backphoto h-[257.98px] w-full border-0 rounded-[32px] absolute bottom-0 md:h-[299.255px] xl:h-[388px]'></div>
            </div>
            <div className='md:flex md:justify-end md:items-center'>
                <div className='px-6 md:p-0 xl:max-w-[465px]'>
                    <h3 className='mb-8 text-[32px] font-semibold tracking-tighter text-gunmetal xl:text-hl'>What your BMI result means</h3>
                    <p className='text-m text-gunmetal'>{message.text}</p>
                </div> 
            </div>
        </div>
    )
}
export default YourResult