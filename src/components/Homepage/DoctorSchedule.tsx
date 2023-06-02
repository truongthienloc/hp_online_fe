import React from 'react'
import {AiFillPhone} from 'react-icons/ai'
const DoctorSchedule = () => {
  return (
    <div className='flex flex-col items-center h-[700px] mt-[96px] '>
        <div className='text-center w-[50%]' data-aos = "fade-down" data-aos-duration = "500" >
            <h2 className='font-bold text-[36px]'>Thời gian biểu</h2>
            <p className='mt-4' >Thời gian biểu của bác sĩ ở bệnh viện đôi khi khá bận rộn và phải linh hoạt nhưng khi đến với HPO chúng tôi cung cấp một thời gian biểu cố định để các bạn có thể đặt lịch trong thời gian phù hợp</p>
        </div>
        <div className='flex mt-4 w-[100%] px-8 items-center' >
            <div className='w-[60%] px-12' data-aos = "fade-right" data-aos-duration = "500">
                <div>
                    
                    <p className='mt-4 text-[18px]'>Một bệnh viện là một cơ sở chăm sóc sức khỏe cung cấp điều trị cho bệnh nhân với các dịch vụ y tế chuyên môn. Bệnh viện cung cấp nhiều loại dịch vụ y tế, bao gồm chẩn đoán bệnh, điều trị y tế, phẫu thuật, y tế cộng đồng và chăm sóc bệnh nhân nội trú. Bệnh viện thường có các bác sĩ, y tá và nhân viên y tế chuyên môn khác để đảm bảo chất lượng chăm sóc y tế cho bệnh nhân.</p>
                    <p className='mt-4 text-[18px]'>Bên cạnh bệnh viện, chúng tôi mang đến một "Bệnh viện Online" để đáp ứng kịp thời nhu cầu và thực trạng hiện nay như một số người ngại đến nơi đông người, bệnh nhẹ thì không dám đến bệnh viện để rồi bệnh nặng thêm,...Chúng tôi hi họng đây là một giải pháp rất tốt để giải quyết các vấn đề trên</p>
                </div>
                <div className='mt-8 flex items-center'>
                    <div>
                        <img className='h-[75px] w-[75px] rounded-[50%]' src = 'https://img.freepik.com/premium-vector/doctor-icon-avatar-white_136162-58.jpg?w=2000'/>
                    </div>
                    <div className='ml-4'>
                        <p className='font-bold text-primary'>Truong Thien Loc</p>
                        <p>Founder HPO</p>
                    </div>
                </div>
            </div>
            <div className='ml-4 w-[40%] h-[100%]'data-aos = "fade-left" data-aos-duration = "500">
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
                        <p>9:00am–5:00pm</p>
                    </div>
                    <div className='flex justify-between mt-4 border-dashed border-black border-b-2 py-2'>
                        <p>Sunday</p>
                        <p>9:00am–5:00pm</p>
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