import {BiHappyAlt} from 'react-icons/bi'
import {FaUserNurse} from 'react-icons/fa'
import {BsFillHospitalFill} from 'react-icons/bs'
function ResultIntro() {
    return (
        <div className="w-full py-8 px-16 flex flex-row justify-around bg-primary">
            <div className="w-60 h-24  flex flex-col items-center rounded-2xl bg-white p-2">
                <div className='h-[50px] w-[50px] rounded-[24px] bg-[#e7effb] flex justify-center items-center'>
                    <BiHappyAlt className='text-[24px] text-[#558ee2]'/>
                </div>
                <Result  title="TỈ LỆ PHẢN HỒI TÍCH CỰC" result="95.12%" />
            </div>
            <div className="w-60 h-24  flex flex-col items-center rounded-2xl bg-white p-2">
                <div className='h-[50px] w-[50px] rounded-[24px] bg-[#f0eefe] flex justify-center items-center'>
                    <FaUserNurse className='text-[24px] text-[#a097f7]'/>
                </div>
                <Result  title="TỈ LỆ PHẢN HỒI TÍCH CỰC" result="95.12%" />
            </div>
            <div className="w-60 h-24  flex flex-col items-center rounded-2xl bg-white p-2">
                <div className='h-[50px] w-[50px] rounded-[24px] bg-[#fef6ea] flex justify-center items-center'>
                    <FaUserNurse className='text-[24px] text-[#f8c063]'/>
                </div>
                <Result  title="SỐ ĐƠN THUỐC ĐÃ ĐƯỢC VẬN CHUYỂN" result="+5200" />
            </div>
        </div>
    );
}

export default ResultIntro;

interface IResultProps {
    title: string;
    result: string;
}

function Result({ title, result }: IResultProps) {
    return (
        <div className="flex-1 flex flex-row items-end mb-1 font-bold text-2xl font-sans">
                {result}
        </div>
    );
}
