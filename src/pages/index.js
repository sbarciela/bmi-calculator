'use client'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//components
import HeroeSection from './components/HeroeSection'
import YourResult from './components/YourResult'
import Tips from './components/Tips'
import Limitations from './components/Limitations'
import Footer from './components/Footer'
import { useState } from 'react'
//results json
import database from "../results.json";




const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [metric , SetMetric]=useState(true)
  const [result, setResult]=useState(false)
  const [bmi, setBmi]= useState()

  function toggleMetric(){
      SetMetric(true)
      setResult(false)
  }
  function toggleImperial(){
      SetMetric(false)
      setResult(false)
  }

  function bmiResult(bmiIndex){
    //if the bmi is different to cero the result component will be appear
    bmiIndex.bmi==NaN?setResult(false):null
    bmiIndex.bmi!==0?setResult(true):setResult(false)

    let weightType
    if(bmiIndex.bmi<=18.5){
      weightType="underweight"
    }else if(bmiIndex.bmi>18.5 && bmiIndex.bmi<=24.9 ){
      weightType="at a healthy weight"
    }else if(bmiIndex.bmi>=25 && bmiIndex.bmi<=29.9){
      weightType="overweight"
    }
    else if(bmiIndex.bmi>30){
      weightType="obese"
    }

    let message
    if(metric){
      message=`Your BMI suggests you are ${weightType}. Your ideal weight is between ${bmiIndex.min}kgs - ${bmiIndex.max}kgs.`
    }else if(!metric){
      message=`Your BMI suggests you are ${weightType}. Your ideal weight is between ${bmiIndex.min}Lbs - ${bmiIndex.max}Lbs.`
    }

    let result={
      bmi:bmiIndex.bmi,
      message: message,
      weightType:weightType
    }
   setBmi(result)
   

    }


  


  return (
    <>
      <Head>
        <title>BMI calculator</title>
        <meta name="description" content="know and understand your body mass index range" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroeSection
         toggleMetric={toggleMetric}
         toggleImperial={toggleImperial}
         metric={metric}
         result={result}
         bmiResult={bmiResult}
         bmi={bmi}
            />
        {metric?<div className='h-[543px] md:h-[216px] xl:h-[65px]'/>:<div className='h-[543px] md:h-[300px] xl:h-[65px]'/>}
        <YourResult result={bmi} database={database} />
        <Tips />
        <Limitations />
        <Footer />
      </main>
    </>
  )
}

