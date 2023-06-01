import React from 'react'
import {useState} from 'react'
const BeforeAfter = () => {
    const [value,setValue] = useState(50)
    const handleOnInput = (e:any) => {
        setValue(e.target.value)
    }
  return (
    <div className='beforeafter flex flex-col items-center mt-[32px]'data-aos = "fade-left" >
        <div className="mt-16 text-center w-[60%]">
            <h2 className="font-bold text-[24px]">Trước và sau khi sử dụng dịch vụ</h2>
            <p className="text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum the industry's standard dummy text.</p>
        </div>
        <div className='border-8 border-white mt-14 h-[500px] relative w-[750px] shadow-md overflow-hidden'>
        <div className='h-full w-full flex'>
            <div className='w-full h-[100%] bg-cover bg-no-repeat bg-[url("https://nischinto-html.netlify.app/nischinto/assets/img/after.jpg")]'>
                    
            </div>
            <div style={{width: `${value}%`}} className='bg-cover absolute h-full w-[50%] bg-no-repeat bg-[url("https://nischinto-html.netlify.app/nischinto/assets/img/before.jpg")]'>

            </div>
        </div>
        <div className='absolute top-0 w-full z-[99]'>
            <div style={{left: `${value}%`}} className='w-[3px] h-[500px] absolute bg-red left-[49.85%] line'>
                <span></span>
            </div>
            <input onInput={(e) => handleOnInput(e)} className='' type='range' min={0} max={100}/>
        </div>
    </div>
    </div>
  )
}

export default BeforeAfter