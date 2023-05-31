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
    const router = useRouter();

    const getAvailable = async () => {
        const res = await Axios.get(
            `https://onlinehpbe.onrender.com/get-available-time-by-id?employeeID=2`,
        );
        const resData = res.data;
        setAvailable(resData);
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
        <main className="min-h-screen flex flex-row pt-14 justify-center">
            <div className="h-screen mt-1 mb-4 w-[65vw] flex flex-col gap-6 ">
                <div className="">
                    <div className="flex justify-center items-center mb-8  py-4">
                        <div className="w-[40%] flex justify-center">
                            <img
                                className="h-[200px] w-[200px] rounded-[50%]"
                                src={avatar}
                                alt={name}
                            />
                        </div>
                        <div className=" ml-4 w-[60%] mr-[36px]">
                            <p className="text-[20px] font-bold">
                                Hi, i am{' '}
                                <span className="font-bold text-[24px] text-[#e13740]">
                                    {name}
                                </span>
                            </p>
                            <p className="">
                                Chào mừng bạn đến với trang đặt lịch của tôi, hãy
                                chọn thời gian phù hợp để tôi có thể chữa trị cho bạn
                                nhé !
                            </p>
                            <div className="flex items-center">
                                <div className="bg-[#e13740] font-bold w-[40%] text-center p-2 mt-2 text-white rounded-[24px] uppercase px-1">
                                    <p>{specialist}</p>
                                </div>
                                <button
                                    onClick={showModal}
                                    className="border border-[#004aad] text-black hover:text-white duration-150 hover:bg-[#004aad] font-bold px-4 ml-6 text-center p-2 mt-2  rounded-[24px]"
                                >
                                    ĐẶT LỊCH
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center font-bold text-[24px] mb-8">
                        <h3>DỊCH VỤ</h3>
                    </div>
                    <div className="flex justify-center px-[64px] ">
                        <div>
                            <div className="flex">
                                <div className="text-[50px] text-[#b1d4ef]">
                                    <AiFillClockCircle />
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-[18px]">
                                        Dịch vụ 24/7
                                    </p>
                                    <p className="opacity-60 ">
                                        Cung cấp thời gian hợp lí giữa khách hàng và
                                        bác sĩ để mang lại trải nghiệm tuyệt vời nhất
                                        với dịch vụ của chúng tôi...
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center my-8">
                                <div className="text-[50px] text-[#b1d4ef]">
                                    <GiHealthNormal />
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-[18px]">
                                        Chuyên môn tốt
                                    </p>
                                    <p className="opacity-60 ">
                                        Những bác sĩ mà chúng tôi cung cấp đến từ các
                                        bệnh viện lớn trên toàn quốc, sở hữu chuyên
                                        môn và kĩ năng tốt trong lĩnh vực họ làm
                                        việc...
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center my-8">
                                <div className="text-[50px] text-[#b1d4ef]">
                                    <MdLocalPharmacy />
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-[18px]">
                                        Nhà thuốc online
                                    </p>
                                    <p className="opacity-60 ">
                                        Khách hàng có thể đặt mua các loại thuốc từ
                                        đơn mà bác sĩ đã kê, ngoài ra có thể mua thêm
                                        nhiều loại thuốc bổ khác...
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-[50px] text-[#b1d4ef]">
                                    <AiFillSchedule />
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-[18px]">
                                        Hệ thống đặt lịch khám online
                                    </p>
                                    <p className="opacity-60 ">
                                        Khách hàng có thể trực tiếp trò chuyện với
                                        bác sĩ mà mình đã đặt một cách riêng tư và có
                                        thể lựa chọn bác sĩ của riêng mình...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%] ml-4">
                            <img
                                className="rounded-lg h-[400px] object-cover"
                                src={avatar}
                            />
                        </div>
                    </div>
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
                            <option value="26-05-2023">26/05/2023</option>
                            <option value="27-05-2023">27/05/2023</option>
                            <option value="28-05-2023">28/05/2023</option>
                            <option value="29-05-2023">29/05/2023</option>
                            <option value="30-05-2023">30/05/2023</option>
                            <option value="01-06-2023">01/06/2023</option>
                            <option value="02-06-2023">02/06/2023</option>
                        </select>
                    </div>

                    <div className="flex flex-row flex-wrap justify-center gap-2 w-full font-semibold text-lg ">
                        {/* TODO: Fetching data (available) and render  */}
                        {available.map((value) => (
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
