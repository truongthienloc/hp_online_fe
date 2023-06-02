import React from 'react';
import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';

import {RiMentalHealthFill} from 'react-icons/ri'
import {BiBone} from 'react-icons/bi'
import {IoMdMedical} from 'react-icons/io'

import {GiLampreyMouth} from 'react-icons/gi'
import {FaClinicMedical} from 'react-icons/fa'
import {BiBrain} from 'react-icons/bi'
import clsx from 'clsx';
const onChange = (key: string) => {
    // console.log(key);
};

const items: TabsProps['items'] = [
    {
    key: '1',
    label: <TabSpecilist  key = {1} color = '#0cb8b6'  BGcolor = '#e6f8f8' name = 'Tâm lí học' Icon = {RiMentalHealthFill}/>,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/crutches.png' name='Tâm lí học'/>,
    },
  {
    key: '2',
    label: <TabSpecilist key = {2} BGcolor = '#fcecea' color = '#e6492d' name = 'Xương khớp' Icon = {BiBone}/>,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/xray.png' name='Xương khớp'/>,
  },
  {
    key: '3',
    label: <TabSpecilist  key = {3} color='#3bb04b' BGcolor = '#ebf7ec' name = 'Nội tiêu hóa' Icon = {IoMdMedical} />,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/pulmonary.png' name='Nội tiêu hóa'/>,
  },
  {
    key: '4',
    label: <TabSpecilist key = {4} color='#1665d8' BGcolor = '#e7effb' name = 'Đa khoa' Icon = {FaClinicMedical}/>,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/cardiology.png' name='Đa khoa'/>,
  },
  {
    key: '5',
    label: <TabSpecilist key = {5} color='#f9c776' BGcolor = '#fef6ea' name = 'Truyền nhiễm' Icon = {GiLampreyMouth}/>,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/dental-care.png' name='Truyền nhiễm'/>,
  },
  {
    key: '6',
    label: <TabSpecilist key = {6} color='#fefefe' BGcolor = '#9ea0a5' name = 'Tâm thần kinh' Icon = {BiBrain}/>,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/neurology.png' name='Tâm thần kinh'/>,
  },
];

interface TabsSpecialistProps {
    name:string,
    Icon:React.FC<{className: string, style:any}>
    color: string,
    BGcolor:string,
    key: number
}

interface ItemProps {
    name:string
    image: string
}

const TabsSpecialist: React.FC = () => {
    return (
        <div className='mt-[128px]'>
            <div className='text-center w-[50%] m-[auto] mb-8'>
                <h2 className='text-[24px] font-bold'>Các khoa của chúng tôi</h2>
                <p className='text-[16px]'>Các khoa ở HPO cũng cung cấp dịch vụ tư vấn và giáo dục y tế cho bệnh nhân. Bác sĩ có thể cung cấp thông tin về bệnh, chế độ ăn uống, lối sống lành mạnh và các biện pháp phòng ngừa bệnh qua các cuộc trò chuyện trực tuyến. Điều này giúp bệnh nhân có được kiến thức cần thiết và hướng dẫn để quản lý sức khỏe của mình một cách hiệu quả.</p>
            </div>
            <Tabs   centered defaultActiveKey="1" items={items}  onChange={onChange} />
        </div>
    )
};
function ItemSpecialist ({name,image}:ItemProps){
    return (
        <div className='flex items-center mt-12' data-aos = "zoom-in">
            <div className='w-[50%]'>
                <img src={image}/>
            </div>
            <div className='w-[50%]'>
                <h2 className='font-bold text-[36px]'>Chào mừng đến với khoa <span className='text-[#004aad]'>{name}</span></h2>
                <p className='text-[18px] my-4'>Các khoa trong bệnh viện online là một phần quan trọng của sự phát triển và tiến bộ trong lĩnh vực chăm sóc sức khỏe. Khi công nghệ thông tin ngày càng phát triển, khái niệm bệnh viện online đã trở thành một giải pháp tiện lợi và linh hoạt để cung cấp dịch vụ y tế từ xa.</p>
                <p className='mb-4'>Khoa trong bệnh viện online cung cấp các dịch vụ y tế thông qua các nền tảng trực tuyến, cho phép bệnh nhân và bác sĩ giao tiếp, tư vấn và chẩn đoán từ xa. Bằng cách sử dụng các công nghệ truyền thông như video cuộc gọi, cuộc họp trực tuyến và ứng dụng di động, bệnh nhân có thể tiếp cận các chuyên gia y tế mà không cần phải đến bệnh viện trực tiếp...</p>
                <Button color='primary'>Đọc thêm</Button>
            </div>

        </div>
    )
}
function TabSpecilist({name, Icon, color, BGcolor}:TabsSpecialistProps){
    return(
        <div style={{backgroundColor: `${BGcolor}`}}  data-aos = "flip-left" className='w-[150px] h-[100px] rounded-md flex flex-col items-center justify-center'>
            <Icon style = {{color: `${color}`}} className='text-white font-bold text-[32px]'/>
            <p className='text-black  text-[16px]'>{name}</p>
        </div>
    )
}
export default TabsSpecialist;