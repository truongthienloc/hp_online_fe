import type { GetServerSideProps } from 'next';
import { MouseEventHandler, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getCookie } from 'cookies-next';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillClockCircle, AiFillSchedule } from 'react-icons/ai';
import { GiHealthNormal } from 'react-icons/gi';
import { MdLocalPharmacy } from 'react-icons/md';
import Axios from '~/utils/Axios';
import { Button, Modal } from 'antd';
import Modall from '~/components/Modal';
import {motion} from 'framer-motion'
import {BsCalendarDate} from 'react-icons/bs'
type IAvailable = {
    employeeID: string;
    start: string;
    end: string;
    date: string;
    isFull: number;
}[];

function DoctorDetailPage({ data }: { data: IData | null }) {
    const [isVisible, setIsVisible] = useState(false);
    const [modalOption, setModalOption] = useState('online');
    const [date, setDate] = useState('');
    const [time, setTime] = useState({ start: '', end: '' });
    const [available, setAvailable] = useState<IAvailable>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataFilter,setDataFilter] = useState<IAvailable>([])
    const router = useRouter();

    const getAvailable = async () => {
        const employeeID = router.query.id
        const res = await Axios.get(
            `https://onlinehpbe.onrender.com/get-available-time-by-id?employeeID=${employeeID}`,
        );
        const resData = res.data;
        setAvailable(resData);
        setDataFilter(resData.filter((el:any,index:number) => el.date === '18-08-2023'))
    };

    useEffect(() => {
        getAvailable();
    }, []);

    // TODO: phân giải data từ BE
    const name = data?.name || 'Trương Thiên Lộc';
    const specialist = data?.specialist || 'Chuyên viên tâm lí';
    const description =
        data?.description ||
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.';

    const avatar = data?.avatar || '/images/doctor-01.jpg';

    const handleChangeDate = (e: ChangeEvent<HTMLSelectElement>) => {
        setDate(e.target.value);
        const newData = available.filter((el,index) => {
            return el.date === e.target.value
        })
        setDataFilter(newData)
    };

    const handleClickTimeButton = (start: string, end: string) => {
        setTime({ start: start, end: end });
        setIsVisible(true);
    };

    const handleChangeModalValue = (e: ChangeEvent<HTMLInputElement>) => {
        setModalOption(e.target.value);
    };

    const handleClickModalCancel = () => {
        setIsVisible(false);
    };

    const handleClickModalOK = async () => {
        setIsVisible(false);

        try {
            const data = {
                employeeID: router.query.id,
                userID: getCookie('id'),
                date: date,
                start: time.start,
                end: time.end,
                type: modalOption,
            };
            const url = process.env.NEXT_PUBLIC_BASE_URL;
            const res = await toast.promise(
                Axios.post(`${url}/book-appointment`, data),
                {
                    pending: 'Đang gửi yêu cầu',
                    success: '',
                    error: 'Đăng nhập thất bại',
                },
                {
                    autoClose: 3000,
                    pauseOnHover: false,
                },
            );

            // TODO: Booking thành công
            toast.success(
                'Đặt lịch thành công. Chúng tôi sẽ liên hệ cho bạn sớm nhất có thể',
            );
        } catch (err) {
            // TODO: Booking error
            toast.error('Đặt lịch thất bại.');
        }
    };
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
        <main className=" flex flex-row pt-14 justify-center bg-[#ffffff] h-screen overflow-hidden">
            <div className=" h-screen mt-1 mb-4 w-[65vw] flex items-center justify-center gap-6 ">
                <div className="">
                        
                    <div className="flex justify-center items-center mb-8  py-4">
                            <div className=" ml-4 w-[60%] mr-[36px] text-center">
                                <motion.div
                                    initial = {{opacity:0, x:-300}}
                                    animate = {{opacity:1, x:0}}
                                    transition={{duration: 1, ease:'linear'}}
                                >
                                    <div>
                                    <h3 className='my-4  text-[64px] font-extrabold text-[#3e98bb]'>Dr. {name}</h3>
                                </div>
                                <div>
                                    <p className='text-[#bbc9cc]'>{description.length > 400 ? `${description.substring(0,350)}...` : description}</p>
                                </div>
                                <div className='mt-4'>
                                    <button onClick={showModal} className='border border-[#3e98bb] text-black hover:text-white hover:bg-[#3e98bb] duration-150 font-bold p-2 px-8 focus:bg-[#2c6c86] rounded-[24px]'>Đặt lịch ngay</button>
                                </div>
                                </motion.div>
                            </div>
                            <motion.div
                                initial = {{opacity:0, x:300}}
                                animate = {{opacity:1, x:0}}
                                transition={{duration:1, ease:'linear'}}
                            >
                                <div className="">
                                <img
                                    className="shadow-xl h-[400px] w-[400px] rounded-[50%]"
                                    src={avatar}
                                    alt={name}
                                />
                            </div>
                            </motion.div>
                    </div>
                    <motion.div
                        initial = {{opacity:0, y:200}}
                        animate = {{opacity:1, y: 0}}
                        transition={{duration: 1, ease:'linear'}}
                    >
                        <div className='w-[full] h-[200px] bg-[#3e98bb] p-8'>
                        <div className='flex items-center'>
                            <BsCalendarDate className='text-[48px] text-white'/>
                            <p className=' ml-4 text-white font-bold'>Thời gian làm việc</p>
                        </div>
                        <div className='flex mt-8 justify-between'>
                            <div className='flex items-center w-[40%] justify-between'>
                                <div>
                                    <p className='text-white text-[17px]'>Thứ hai - Thứ sáu</p>
                                </div>
                                <div className='w-[20px] h-[4px] bg-white'></div>
                                <div>
                                    <p className='text-white text-[17px]'>8:00 - 17:00</p>
                                </div>
                            </div>
                            <div className='flex items-center w-[40%] justify-between'>
                                <div>
                                    <p className='text-white text-[17px]'>Thứ bảy - Chủ nhật</p>
                                </div>
                                <div className='w-[20px] h-[4px] bg-white'></div>
                                <div>
                                    <p className='text-white text-[17px]'>8:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                </div>
            </div>

            <Modal
                title="ĐẶT LỊCH HẸN"
                okType="default"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div className="flex-1 pt-8 px-2 flex flex-col items-center gap-8 border-black">
                    <div className="flex flex-col gap-2 items-center text-lg font-semibold">
                        <label htmlFor="select-date">Chọn ngày</label>

                        {/* TODO: Fetching data (date) and render */}
                        <select
                            className="border border-black w-[300px] rounded p-2 px-4 mt-2"
                            name="select-date"
                            id="select-date"
                            value={date}
                            onChange={handleChangeDate}
                        >
                            <option value="18-08-2023">18/08/2023</option>
                            <option value="19-08-2023">19/08/2023</option>
                            <option value="20-08-2023">20/08/2023</option>
                            <option value="21-08-2023">21/08/2023</option>
                            <option value="22-08-2023">22/08/2023</option>
                            <option value="23-08-2023">23/08/2023</option>
                            <option value="24-08-2023">24/08/2023</option>
                        </select>
                    </div>

                    <div className="flex flex-row flex-wrap justify-center gap-2 w-full font-semibold text-lg ">
                        {/* TODO: Fetching data (available) and render  */}
                        {dataFilter.map((value) => (
                            <TimeButton
                                key={`${value.date} - ${value.start} - ${value.employeeID}`}
                                start={value.start}
                                end={value.end}
                                onClick={() =>
                                    handleClickTimeButton(value.start, value.end)
                                }
                            />
                        ))}
                    </div>

                    {/* TODO: Xử lí các sự kiện của Modal */}
                    <Modall
                        isRenderHeader={true}
                        title="Bạn muốn khám bằng hình thức nào?"
                        onOk={handleClickModalOK}
                        isVisible={isVisible}
                        onCancel={handleClickModalCancel}
                    >
                        {/* TODO: Style cho form */}
                        <form>
                            <input
                                type="radio"
                                id="online"
                                name="type-appointment"
                                value="online"
                                checked={modalOption === 'online'}
                                onChange={handleChangeModalValue}
                            />
                            <label htmlFor="online">Online</label>
                            <br />
                            <input
                                type="radio"
                                id="offline"
                                name="type-appointment"
                                value="offline"
                                checked={modalOption === 'offline'}
                                onChange={handleChangeModalValue}
                            />
                            <label htmlFor="offline">Offline</label>
                            <br />
                        </form>
                    </Modall>
                </div>
            </Modal>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </main>
    );
}

export default DoctorDetailPage;

interface IData {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    specialist: string;
    gender: string;
    description: string;
    avatar: string;
}

export const getServerSideProps: GetServerSideProps<
    { data: IData } | { data: null }
> = async (ctx) => {
    try {
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        const id = ctx.params?.id;
        const res = await fetch(`${url}/get-doctor?employeeID=${id}`);
        const data = (await res.json()) as IData;

        console.log('data: ', data);

        return {
            props: {
                data: data,
            },
        };
    } catch (err) {
        return {
            props: {
                data: null,
            },
        };
    }
};

interface ITimeButtonProps {
    start: string;
    end: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

function TimeButton({ start, end, onClick }: ITimeButtonProps) {
    return (
        <button
            className="  w-[40%] hover:bg-[#2a9d8f] p-2 rounded-[24px] text-black hover:text-white  duration-150 border border-[#afdad5]"
            onClick={onClick}
        >
            {`${start} - ${end}`}
        </button>
    );
}
