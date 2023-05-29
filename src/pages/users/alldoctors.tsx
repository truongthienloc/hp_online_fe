import UserTable from './UserTable';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';

type UserType = {
    id: string | number;
    name?: string;
    email?: string;
    roleId?: number;
    team?: string;
    status: 'active' | 'paused' | 'vacation';
    age?: string;
    avatar?: string;
    specialist: string;
    address: string;
};

const AllDoctors = () => {
    const [data, setData] = useState<UserType[]>([]);
    useEffect(() => {
        const getData = async () => {
            await axios
                .get('https://onlinehpbe.onrender.com/get-all-doctor')
                .then((response) => setData(response.data));
        };
        getData();
    }, []);
    return (
        <div className="p-[80px]">
            <div className="mb-4">
                <h2 className="font-bold text-lg">Quản lí bác sĩ</h2>
            </div>
            <div>
                <UserTable data={data} />
            </div>
        </div>
    );
};
export default AllDoctors;
