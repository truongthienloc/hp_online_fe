import type { GetServerSideProps } from 'next';
import { MouseEventHandler, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getCookie } from 'cookies-next';
import Axios from '~/utils/Axios';

import Modal from '~/components/Modal';

function DoctorDetailPage({ data }: { data: IData | null }) {
    const [isVisible, setIsVisible] = useState(true);
    const [modalOption, setModalOption] = useState('online');
    const [date, setDate] = useState('');
    const [time, setTime] = useState({ start: '', end: '' });

    const router = useRouter();

    // TODO: phân giải data từ BE
    const name = data?.name || 'Trương Thiên Lộc';
    const specialist = data?.specialist || 'Chuyên viên tâm lí';
    const detail =
        data?.detail ||
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
        setIsVisible(false)
    }

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
            const res = await Axios.post(`${url}/book-appointment`, data);

            // TODO: Booking thành công
        } catch (err) {
            // TODO: Booking error
        }
    };
    return (
        <main className="min-h-screen flex flex-row pt-14">
            <div className="h-screen mt-1 mb-4 w-[65vw] flex flex-col gap-6 overflow-auto px-4 sub-scrollbar">
                <div className="flex flex-col items-center bg-slate-200">
                    <img className="h-52" src={avatar} alt={name} />
                </div>
                <div className="flex flex-col p-4 gap-2 bg-zinc-200 font-sans-serif">
                    <p className="font-bold text-2xl">{name}</p>
                    <p className="font-semibold">Chức danh: {specialist}</p>
                </div>
                <p className="text-lg font-custom-serif text-justify first-line:ml-4 indent-16">
                    {detail}
                </p>
            </div>

            <div className="flex-1 pt-8 px-2 flex flex-col items-center gap-8 border-l-2 border-black">
                <h1 className="font-bold">ĐẶT LỊCH HẸN</h1>

                <div className="flex flex-col gap-2 items-center text-lg font-semibold">
                    <label htmlFor="select-date">Chọn ngày</label>

                    {/* TODO: Fetching data (date) and render */}
                    <select
                        className="bg-stone-200 rounded p-1 px-2"
                        name="select-date"
                        id="select-date"
                        value={date}
                        onChange={handleChangeDate}
                    >
                        <option value="26-05-2023">26/05/2023</option>
                        <option value="26-05-2023">26/05/2023</option>
                        <option value="26-05-2023">26/05/2023</option>
                        <option value="26-05-2023">26/05/2023</option>
                        <option value="26-05-2023">26/05/2023</option>
                        <option value="26-05-2023">26/05/2023</option>
                        <option value="26-05-2023">26/05/2023</option>
                    </select>
                </div>

                <div className="flex flex-row flex-wrap justify-start gap-2 w-full p-2 font-semibold text-lg bg-violet-200">
                    {/* TODO: Fetching data (available) and render  */}
                    <TimeButton
                        start="90:00:00"
                        end="10:00:00"
                        onClick={() => handleClickTimeButton('90:00:00', '10:00:00')}
                    />
                </div>

                {/* TODO: Xử lí các sự kiện của Modal */}
                <Modal
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
                </Modal>
            </div>
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
    detail: string;
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
        <button className="p-1 bg-orange-500 rounded-md" onClick={onClick}>
            {`${start} - ${end}`}
        </button>
    );
}
