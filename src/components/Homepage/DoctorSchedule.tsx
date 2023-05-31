import React from 'react'
import {AiFillPhone} from 'react-icons/ai'
const DoctorSchedule = () => {
  return (
    <div className='flex flex-col items-center h-[700px] mt-[96px] '>
        <div className='text-center w-[50%]'>
            <h2 className='font-bold text-[36px]'>Thời gian biểu</h2>
            <p className='mt-4' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus laboriosam voluptate numquam nihil dolore assumenda dicta. Nemo nobis praesentium exercitationem perferendis, obcaecati ullam minima ratione, quod alias corporis, modi ut!</p>
        </div>
        <div className='flex mt-4 w-[100%] px-8 items-center'>
            <div className='w-[60%] px-12'>
                <div>
                    <h3 className='text-[24px] font-bold'>A hospital is a health care institution providing patient treatment with specialized medical</h3>
                    <p className='mt-4 text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque neque ex ullam porro dolorem quod asperiores quisquam iure. Amet quam obcaecati enim, tempore non sapiente quisquam assumenda dignissimos eos?</p>
                    <p className='mt-4 text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque neque ex ullam porro dolorem quod asperiores quisquam iure. Amet quam obcaecati enim, tempore non sapiente quisquam assumenda dignissimos eos?</p>
                </div>
                <div className='mt-8 flex items-center'>
                    <div>
                        <img src = 'https://nischinto-html.netlify.app/nischinto/assets/img/avatar1.png'/>
                    </div>
                    <div className='ml-4'>
                        <p className='font-bold text-primary'>David Ambrose</p>
                        <p>Founder & Director</p>
                    </div>
                </div>
            </div>
            <div className='ml-4 w-[40%] h-[100%]'>
                <div className='w-[70%]  p-4 border border-[#004aad]'>
                    <div>
                    <p className='font-bold text-[16px] text-[#004aad]'>Weekly Schedule</p>
                </div>
                    <div className='flex justify-between mt-4 border-dashed border-black border-b-2 py-2'>
                        <p>Monday</p>
                        <p>8:00am–7:00pm</p>
                    </div>
                    <div className='flex justify-between mt-4 border-dashed border-black border-b-2 py-2'>
                        <p>Thuesday</p>
                        <p>8:00am–7:00pm</p>
                    </div>
                    <div className='flex justify-between mt-4 border-dashed border-black border-b-2 py-2'>
                        <p>Wednesday</p>
                        <p>8:00am–7:00pm</p>
                    </div>
                    <div className='flex justify-between mt-4 border-dashed border-black border-b-2 py-2'>
                        <p>Thursday</p>
                        <p>8:00am–7:00pm</p>
                    </div>
                    <div className='flex justify-between mt-4 border-dashed border-black border-b-2 py-2'>
                        <p>Friday</p>
                        <p>8:00am–7:00pm</p>
                    </div>
                    <div className='flex justify-between mt-4 border-dashed border-black border-b-2 py-2'>
                        <p>Saturday</p>
                        <p>8:00am–7:00pm</p>
                    </div>
                    <div className='flex justify-between mt-4 border-dashed border-black border-b-2 py-2'>
                        <p>Sunday</p>
                        <p>8:00am–7:00pm</p>
                    </div>
                    <div className='flex items-center mt-4'>
                        <div className='mr-4'>
                            <AiFillPhone className='text-[36px]'/>
                        </div>
                        <div>
                            <p className='font-bold text-[#004aad]'>Call: 0123123123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorSchedule