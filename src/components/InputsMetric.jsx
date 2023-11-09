import { useRef, useState } from 'react'

function ImputsMetric({bmiResult}){

const[error, setError]=useState(false)
const[error2, setError2]=useState(false)



let inputCm=useRef()
let inputKg=useRef()

function value(){
let height=inputCm.current.value/100
let weight= inputKg.current.value
let height2=height*height

let bmi
if(height2==0 || weight==0){
    bmi=0
}else{
    bmi=(weight/height2).toFixed(2)}


let result={
bmi: Number(bmi),
min: Number((height2*20).toFixed(1)),
max: Number((height2*25).toFixed(1))
}
bmiResult(result)
}

function lengthHandler(e){
 if(e.target.value<0 || e.target.value>270){
        e.target.value=null
        setError(true)
    }else if(e.target.value>=0 && e.target.value<270){
        setError(false)
    }
    }

function weightHandler(e){
    if(e.target.value<0 || e.target.value>500){
        e.target.value=null
        setError2(true)
    }else if(e.target.value>=0 && e.target.value<500){
    setError2(false)
    }
}

    return(
        <div className="md:grid md:grid-cols-2 md:gap-6" >
            <div>
                <h3 className='text-s text-darkelectric font-normal mb-2'>Height</h3>
                <div className='grid grid-cols-1'>
                    <label  className={`flex justify-between border border-borders rounded-xl py-5 px-6 mb-4 md:mb-8 hover:border-blue focus-within:border-blue cursor-pointer ${error?"focus-within:border-red-500":""}`}>
                        <input ref={inputCm} onChange={value} onInput={lengthHandler}  
                        autoFocus type="number" name="cm" id="cm"  placeholder="0" 
                        className="text-hm text-gunmetal font-semibold w-3/4 cursor-pointer focus:outline-none"  />
                        <span className='text-hm font-semibold text-blue'>cm</span>
                    </label>
                    {error?<span className='text-s text-red-500'>Height must be 0 ~ 270 cm</span>:null}
                </div>
            </div>

            <div>
                <h3 className='text-s text-darkelectric font-normal mb-2'>Weight</h3>
                <div className='grid grid-cols-1'> 
                    <label className={`flex justify-between border border-borders rounded-xl py-5 px-6 mb-6 md:mb-8 hover:border-blue focus-within:border-blue cursor-pointer ${error2?"focus-within:border-red-500":""}`}>
                        <input onInput={weightHandler} onChange={value} ref={inputKg} type="number" name="kg" id="kg" placeholder="0" className='text-hm text-gunmetal font-semibold w-3/4 cursor-pointer focus:outline-none' />
                        <span className='text-hm font-semibold text-blue'>kg</span>
                    </label>
                    {error2?<span className='text-s text-red-500'>Weight must be 0 ~ 500 kg</span>:null}
                </div>
            </div>
        </div>
    )
}

export default ImputsMetric