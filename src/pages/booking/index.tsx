import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import Axios from '~/utils/Axios';
function BookingPage({ data }: { data: IData | null }) {
    const doctors = data?.doctors;
    // console.log(data);

    return (
        <div>
            <motion.div 
                initial = {{opacity:0, x:-200}}
                animate = {{opacity: 1, x:0}}
                transition = {{duration: .5, ease:'easeInOut'}}
            >
                <div className="relative h-[300px] bg-no-repeat bg-center bg-cover  pt-28 bg-[url('https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=1060&t=st=1685451472~exp=1685452072~hmac=6db1e58d105e7d2a7d750f46736f8b2dc6a84f26a734cb43dd3e461ef1de12b3')]">
                <div className=" opacity-70 absolute w-full h-full bg-black top-0 left-0"></div>
                <div className="flex items-center justify-center mt-8 flex flex-col">
                    <h2 className="text-white text-[24px] font-bold relative z-90">
                        HEALTHCARE & PHARMACY ONLINE
                    </h2>
                    <h3 className="text-white text-[24px]  relative z-90">
                        Danh sách bác sĩ
                    </h3>
                </div>
                </div>
            </motion.div>
            <main className="bg-[#fefefe] min-h-screen justify-center p-12 pt-28 flex flex-row gap-12 flex-wrap">
                {/* TODO: Render doctors */}
                {doctors?.map((doctor) => (
                    <motion.div key = {doctor.id}
                        initial = {{opacity:0, y:200}}
                        animate = {{opacity: 1, y:0}}
                        transition = {{duration: 1, ease:'easeInOut'}}
                    >
                        <DoctorItem
                        key={doctor.id}
                        id={doctor.id}
                        name={doctor.name}
                        specialist={doctor.specialist}
                        avatar={doctor.avatar}
                        />
                    </motion.div>
                ))}
                {/* <DoctorItem
                id="12345"
                name="Trương Thiên Lộc"
                specialist="Chuyên viên tâm lí"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                specialist="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            /> */}
            </main>
        </div>
    );
}

export default BookingPage;

interface IDoctorData {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    specialist: string;
    gender: string;
    avatar: string;
}

interface IData {
    doctors: IDoctorData[];
}

export const getServerSideProps: GetServerSideProps<
    { data: IData } | { data: null }
> = async (ctx) => {
    try {
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        // const id = ctx.params?.id;
        const res = await fetch(`https://onlinehpbe.onrender.com/get-all-doctor`);
        // console.log("data: ", res);
        const doctors = (await res.json()) as IDoctorData[];

        // console.log("data: ", doctors);

        return {
            props: {
                data: {
                    doctors: doctors,
                },
            },
        };
    } catch (err) {
        // console.log("error", err);
        return {
            props: {
                data: null,
            },
        };
    }
};

export interface IDoctorItemProps {
    id?: string;
    name: string;
    specialist: string;
    avatar: string;
}

interface doctorData {
    id:number,
    name:string,
    email:string,
    address:string,
    phone:string,
    specialist: string,
    gender: string,
    roleId: number,
    description: string
}

export function DoctorItem({ id, name, specialist, avatar }: IDoctorItemProps) {
    const router = useRouter();
    const emptyData = {
        id: 0,
        name: "",
        email: "",
        address:"",
        phone:"",
        specialist: "",
        gender: "",
        roleId: 0,
        description: ""
    }
    const [doctorData,setDoctorData] = useState<doctorData>(emptyData)
    const getDoctorData = async () => {
        const res = await Axios.get(
            `https://onlinehpbe.onrender.com/get-doctor?employeeID=${id}`,
        );
        const resData = res.data;
        setDoctorData(resData)
    };

    useEffect(() => {
        getDoctorData();
    }, []);
    const handleClickDetail = () => {
        if (!id) {
            return;
        }

        router.push(`/booking/${id}`);
    };

    return (
        <div className="bg-white flex flex-col justify-center items-center h-[100%] p-4 basis-80 max-w-[580px] flex-grow flex-shrink-0 shadow-lg rounded-lg  gap-2">
            <div className="">
                <img
                    className="h-[150px] w-[150px] rounded-[50%]"
                    src={avatar}
                    alt={name}
                />
            </div>
            <div className="flex">
                <p className="font-bold text-xl">Bác sĩ:</p>
                <p className="ml-2 font-bold  text-xl">{name}</p>
            </div>
            <div className="flex">
                <p className="text-md opacity-50">Khoa:</p>
                <p className="ml-2 text-md opacity-50">{specialist}</p>
            </div>
            <div>
                <p className="ml-2 text-md opacity-50">
                    {doctorData.description.length > 200 ? `${doctorData?.description.substring(0,255)}...` : doctorData?.description}
                </p>
            </div>
            <div className='w-[100%] mt-[auto]'>
                <button
                className=" w-[100%] mt-4 rounded-[24px] bg-primary font-semibold text-white p-1"
                onClick={handleClickDetail}
            >
                Chi tiết
            </button>
            </div>
        </div>
    );
}
