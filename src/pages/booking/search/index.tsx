import { DoctorItem, IDoctorItemProps } from '..';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { toast, ToastContainer } from 'react-toastify';
import Axios from '~/utils/Axios';

function SearchDoctor() {
    const [doctors, setDoctors] = useState<IDoctorItemProps[]>([]);

    useEffect(() => {
        const input = document.querySelector('#search') as HTMLTextAreaElement;
        const handleEnterPress = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && !e.shiftKey && !e.altKey && !e.ctrlKey) {
                e.preventDefault();
                handleSendSearching();
            }
        };

        input.addEventListener('keydown', handleEnterPress);

        return () => {
            input.removeEventListener('keydown', handleEnterPress);
        };
    }, []);

    const handleSendSearching = async () => {
        const input = document.querySelector('#search') as HTMLTextAreaElement;
        const comment = input.value;

        if (comment.length === 0) {
            toast.error('Khung tìm kiếm không được phép để trống');
            input.focus();
            return;
        }

        try {
            const res = await toast.promise(
                Axios.get(`/search-suitable-doctor?comment=${comment}`),
                {
                    pending: 'Đang tìm kiếm',
                    success: 'Tìm kiếm thành công',
                    error: 'Tìm kiếm thất bại',
                },
                {
                    autoClose: 3000,
                    pauseOnHover: false,
                },
            );

            const data = res.data as IDoctorItemProps[];

            setDoctors(data);
        } catch (err) {
            console.error('Tìm kiếm bác sĩ không thành công');
        }
    };

    return (
        <main className="min-h-screen w-full flex flex-col pt-24 items-center">
            <h1 className="w-5/6 font-bold text-3xl text-center">
                HÃY VIẾT MÔ TẢ VỀ CÁC CHỊU CHỨNG CỦA BẠN TRONG VÀO KHUNG BÊN DƯỚI ĐỂ
                TÌM KIẾM CÁC BÁC SĨ TỐT NHẤT
            </h1>
            <textarea
                className="w-[700px] h-[200px] mt-6 p-2 border-[2px] border-black rounded font-custom-serif text-xl"
                name="search"
                id="search"
            ></textarea>
            <div className="flex flex-row w-[700px] justify-end pt-2 font-bold">
                <Button
                    className="bg-primary text-white hover:bg-blue-600"
                    icon={<SearchOutlined />}
                    onClick={handleSendSearching}
                >
                    Search
                </Button>
            </div>

            <div className="mt-4 min-h-[1px] w-full justify-center p-12 pt-28 flex flex-row gap-8 flex-wrap border-t-2 border-black ">
                {doctors ? (
                    doctors.map((value) => (
                        <DoctorItem
                            key={value.id}
                            id={value.id}
                            name={value.name}
                            avatar={value.avatar}
                            specialist={value.specialist}
                        />
                    ))
                ) : (
                    <></>
                )}
            </div>
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

export default SearchDoctor;
