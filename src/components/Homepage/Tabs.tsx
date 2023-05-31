import React from 'react';
import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import {TbCrutches, TbDentalBroken} from 'react-icons/tb'
import {FaXRay} from 'react-icons/fa'
import {BsFillHeartPulseFill} from 'react-icons/bs'
import {FaHandHoldingHeart} from 'react-icons/fa'
import {BiBrain} from 'react-icons/bi'
import clsx from 'clsx';
const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
    key: '1',
    label: <TabSpecilist color = '#0cb8b6'  BGcolor = '#e6f8f8' name = 'Crutches' Icon = {TbCrutches}/>,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/crutches.png' name='Crutches'/>,
    },
  {
    key: '2',
    label: <TabSpecilist BGcolor = '#fcecea' color = '#e6492d' name = 'X-ray' Icon = {FaXRay}/>,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/xray.png' name='X-ray'/>,
  },
  {
    key: '3',
    label: <TabSpecilist  color='#3bb04b' BGcolor = '#ebf7ec' name = 'Pulmonary' Icon = {BsFillHeartPulseFill} />,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/pulmonary.png' name='Pulmonary'/>,
  },
  {
    key: '4',
    label: <TabSpecilist color='#1665d8' BGcolor = '#e7effb' name = 'Cardiology' Icon = {FaHandHoldingHeart}/>,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/cardiology.png' name='Cardiology'/>,
  },
  {
    key: '5',
    label: <TabSpecilist color='#f9c776' BGcolor = '#fef6ea' name = 'Dental care' Icon = {TbDentalBroken}/>,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/dental-care.png' name='DentalCare'/>,
  },
  {
    key: '6',
    label: <TabSpecilist color='#fefefe' BGcolor = '#9ea0a5' name = 'Neurology' Icon = {BiBrain}/>,
    children: <ItemSpecialist image = 'https://nischinto-html.netlify.app/nischinto/assets/img/neurology.png' name='Neurology'/>,
  },
];

interface TabsSpecialistProps {
    name:string,
    Icon:React.FC<{className: string, style:any}>
    color: string,
    BGcolor:string
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum the industry's standard dummy text.</p>
            </div>
            <Tabs  centered defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
};
function ItemSpecialist ({name,image}:ItemProps){
    return (
        <div className='flex items-center mt-12'>
            <div className='w-[50%]'>
                <img src={image}/>
            </div>
            <div className='w-[50%]'>
                <h2 className='font-bold text-[36px]'>Welcome to our <span className='text-[#004aad]'>{name}</span></h2>
                <p className='text-[24px] my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae sapiente quos.</p>
                <p className='mb-4'>Oillum abrem deleniti adipisci suscipit dignissimos. remaining essentially unchanged. It was popularised in the with the . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button color='primary'>Read More</Button>
            </div>

        </div>
    )
}
function TabSpecilist({name, Icon, color, BGcolor}:TabsSpecialistProps){
    return(
        <div style={{backgroundColor: `${BGcolor}`}} className='w-[150px] h-[100px] rounded-md flex flex-col items-center justify-center'>
            <Icon style = {{color: `${color}`}} className='text-white font-bold text-[32px]'/>
            <p className='text-black font-bold text-[16px]'>{name}</p>
        </div>
    )
}
export default TabsSpecialist;