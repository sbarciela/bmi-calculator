import { useRef, useState } from 'react'

function InputsImperial({bmiResult}){
const[error, setError]=useState(false)
const[error2, setError2]=useState(false)

let inputFt=useRef()
let inputIn=useRef()

let inputSt=useRef()
let inputLbs=useRef()


function value(){
let ft=inputFt.current.value
let inch=inputIn.current.value
let st=inputSt.current.value
let lb=inputLbs.current.value 

let weight = (st*6.35)+(lb*0.45359237)
let height =((ft*30.48)+(inch*2.54))/100
let height2=height*height

let bmi
if(height2==0 || weight==0){
bmi=0
}else{
bmi=(weight/height2).toFixed(2)}

let result={
    bmi: Number(bmi),
    min: Number(((height2*20)*2.205).toFixed(1)),
    max: Number(((height2*25)*2.205).toFixed(1))
    }
    bmiResult(result)
}
    
function lengthHandler(e){
    let ft=inputFt.current.value
    let inch=inputIn.current.value

    let height =((ft*30.48)+(inch*2.54))

    if(height<0 || height>270){
            e.target.value=null
            setError(true)
        }else if(height>=0 && height<270){
            setError(false)
        }
        }
    
function weightHandler(e){
    let st=inputSt.current.value
    let lb=inputLbs.current.value
    
    let weight = (st*6.35)+(lb*0.45359237)

    if(weight<0 || weight>500){
        e.target.value=null
        setError2(true)
    }else if(weight>=0 && weight<500){
    setError2(false)
    }
}



    return(
        <div>
            {/**Height */}
            <h3 className='text-s text-darkelectric font-normal mb-2'>Height</h3>
            <div className='grid grid-cols-2 gap-x-4'>
                <label className={`flex justify-between border border-borders rounded-xl py-5 px-6 mb-4  hover:border-blue focus-within:border-blue cursor-pointer ${error?"focus-within:border-red-500":""}`}>
                    <input ref={inputFt} onChange={value} onInput={lengthHandler} autoFocus
                     type="number" name="ft" id="ft" placeholder="0"
                     className='text-hm font-semibold w-3/4 text-gunmetal cursor-pointer focus:outline-none '  />
                    <span className='text-hm font-semibold text-blue'>ft</span>
                </label>
                <label className={`flex justify-between border border-borders rounded-xl py-5 px-6 mb-4  hover:border-blue focus-within:border-blue cursor-pointer ${error?"focus-within:border-red-500":""} `}>
                    <input ref={inputIn} onChange={value} onInput={lengthHandler}
                     type="number" name="in" id="in" placeholder="0"
                      className='text-hm font-semibold w-3/4 text-gunmetal cursor-pointer focus:outline-none'  />
                    <span className='text-hm font-semibold text-blue'>in</span>
                </label>
                {error?<span className='text-s text-red-500'>Height must be 9 feet max.</span>:null}
            </div>

            {/**Weight */}

            <h3 className='text-s text-darkelectric font-normal mb-2'>Weight</h3>
            <div className='grid grid-cols-2 gap-x-4'>
                <label className={`flex justify-between border border-borders rounded-xl py-5 px-6 mb-6  hover:border-blue focus-within:border-blue cursor-pointer ${error2?"focus-within:border-red-500":""}`}>
                    <input ref={inputSt} onChange={value} onInput={weightHandler}
                     type="number" name="st" id="st" placeholder="0"
                     className='text-hm font-semibold w-3/4 text-gunmetal cursor-pointer focus:outline-none'  />
                    <span className='text-hm font-semibold text-blue'>st</span>
                </label>
                <label className={`flex justify-between border border-borders rounded-xl py-5 px-6 mb-6  hover:border-blue focus-within:border-blue cursor-pointer ${error2?"focus-within:border-red-500":""}`}>
                    <input ref={inputLbs} onChange={value} onInput={weightHandler}
                     type="number" name="lbs" id="lbs" placeholder="0"
                     className='text-hm font-semibold w-3/4 text-gunmetal cursor-pointer focus:outline-none'  />
                    <span className='text-hm font-semibold text-blue'>lbs</span>
                </label>
                {error2?<span className='text-s text-red-500'>Weight must 1102 Lbs max.</span>:null}
            </div>
        </div>
    )
}

export default InputsImperial