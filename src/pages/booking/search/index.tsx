import { DoctorItem, IDoctorItemProps } from '..';
import { useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { toast, ToastContainer } from 'react-toastify';
import Axios from '~/utils/Axios';
import {motion} from 'framer-motion'
import {Input, Button} from 'antd'
const {Search} = Input
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
    const onSearch = (value:string) => console.log(value)
    return (
        <div>
            <motion.div
                initial={{opacity:0, x:-200}}
                animate = {{opacity:1, x:0}}
                transition={{duration:1}}
            >
                <div className="relative h-[300px] bg-no-repeat bg-center bg-cover  pt-28 bg-[url('https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=1060&t=st=1685558742~exp=1685559342~hmac=a97b8bc83bafb17511399d5bceda1d5b2de0503ff47e0caf111526d93a7e3d3f')]">
                <div className=" opacity-70 absolute w-full h-full bg-black top-0 left-0"></div>
                <div className="flex items-center justify-center mt-8 flex flex-col">
                    <h2 className="text-white text-[24px] font-bold relative z-90">
                        HEALTHCARE & PHARMACY ONLINE
                    </h2>
                    <h3 className="text-white text-[24px]  relative z-90">
                        Hệ thống hỗ trợ tìm kiếm bác sĩ
                    </h3>
                </div>
            </div>
            </motion.div>
            <main className="  min-h-screen w-full flex flex-col  items-center bg-gradient-to-r from-blue-200 to-cyan-200">
            
            <motion.div
                initial={{opacity:0, x:200}}
                animate = {{opacity:1, x:0}}
                transition={{duration:1}}
                className='w-[50%]'
            >
                <div className='w-[100%] mt-8'>
                    <Search  suffix = {<Button onClick={handleSendSearching}>Search</Button>} size = "large" bordered = {true} enterButton = {true} id = "search" name = "search" placeholder='Nhập điều gì đó...' onSearch={onSearch}/>
                </div>
            </motion.div>

            <div className="mt-4  w-full justify-center p-12 pt-28 flex flex-row gap-8 flex-wrap ">
                {doctors ? (
                    doctors.map((value) => (
                        <motion.div key={value.id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <DoctorItem
                            
                            id={value.id}
                            name={value.name}
                            avatar={value.avatar}
                            specialist={value.specialist}
                            />
                        </motion.div>
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
        </div>
    );
}

export default SearchDoctor;
