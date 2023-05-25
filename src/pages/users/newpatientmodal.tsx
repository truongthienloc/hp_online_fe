import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { NextPage } from 'next';
import {AiFillCheckCircle} from 'react-icons/ai'
import Image from 'next/image';
const NewPatientInfor: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick = {showModal}>
        <AiFillCheckCircle/>
      </div>
      <Modal title="Thông tin của bệnh nhân" bodyStyle={{height: 400}} width={800} okType = "dashed" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='mt-8 p-4'>
            <div className='flex justify-center'>
                <div className='mb-4 rounded-[50%] overflow-hidden h-[100px] w-[100px]' >
                <Image 
                src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                height = {100}
                width = {100}
                alt = 'avt'
                />
                </div>
            </div>
            <div className='mt-2 flex'>
                <div className='w-1/3'>
                    <p className='mb-2 font-bold'>Họ và tên: </p>
                    <p className='p-4 bg-[#ecebf7] rounded-lg '>James Patterson</p>
                </div>
                <div className='w-1/3 mx-4'>
                    <p className='mb-2 font-bold'>Số điện thoại: </p>
                    <p className='p-4 bg-[#ecebf7] rounded-lg '>Los Angelas, USA</p>
                </div>
                <div className='w-1/3'>
                    <p className='mb-2 font-bold'>Email </p>
                    <p className='p-4 bg-[#ecebf7] rounded-lg '>jamespt@gmail.com</p>
                </div>
            </div>
            <div className='mt-2 flex items-center'>
                <div className='w-1/2'>
                    <p className='mb-2 font-bold'>Ngày đặt lịch: </p>
                    <p className='p-4 bg-[#ecebf7] rounded-lg '>25/05/2023</p>
                </div>
                <div className='flex-1 ml-8'>
                    <p className='mb-2 font-bold'>Thời gian đặt lịch: </p>
                    <p className='p-4 bg-[#ecebf7] rounded-lg '>7:00 - 8:00</p>
                </div>
            </div>
            <div className='mt-2'>
                <p className='mb-2 font-bold'>Lí do khám bệnh: </p>
                <p className='p-4 bg-[#ecebf7] rounded-lg '>Đau họng</p>
            </div>
        </div>
      </Modal>
    </>
  );
};

export default NewPatientInfor;