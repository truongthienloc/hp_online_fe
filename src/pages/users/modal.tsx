import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { NextPage } from 'next';
import {GrCircleInformation} from 'react-icons/gr'
import Image from 'next/image';
const ModalInfor: NextPage = () => {
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
        <GrCircleInformation/>
      </div>
      <Modal title="Thông tin của bác sĩ" bodyStyle={{height: 400}} width={800} okType = "dashed" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
            <div className=''>
                <p className='mb-2 font-bold'>Họ và tên: </p>
                <p className='p-4 bg-[#ecebf7] rounded-lg '>James Patterson</p>
            </div>
            <div className='mt-2'>
                <p className='mb-2 font-bold'>Địa chỉ: </p>
                <p className='p-4 bg-[#ecebf7] rounded-lg '>Los Angelas, USA</p>
            </div>
            <div className='mt-2'>
                <p className='mb-2 font-bold'>Chuyên môn: </p>
                <p className='p-4 bg-[#ecebf7] rounded-lg '>Răng hàm mặt</p>
            </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalInfor;