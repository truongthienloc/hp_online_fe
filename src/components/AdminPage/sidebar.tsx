import Image from 'next/image';
import { AiFillDashboard, AiOutlineSchedule } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { TbNurse } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';

import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    const [roleID, setRoleID] = useState(0);
    const router = useRouter();
    const { category } = router.query;
    const [imagePath, setImagePath] = useState<string>("")
    useEffect(() => {
        const cRoleID = getCookie('roleID');
        const imagePath = getCookie('avatar')
        if (!cRoleID) {
            router.push('/login');
            return;
        }
        setImagePath(String(imagePath))
        setRoleID(Number(cRoleID));
    }, []);

    return (
        <div className="bg-white w-[15%] px-8 py-12">
            <div>
                <div className="rounded-[50%] w-[100px] overflow-hidden m-[auto]">
                    <Image
                        className="h-[100px]"
                        src={imagePath !== 'null' ? imagePath : 'https://www.surfcam.com/images/icons/hexagon/darkblue/MI_DARK_BLUE_ICON_SUPPORT.png'}
                        alt="doctor"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="mt-4 text-center">
                    <p>
                        Xin chào,{' '}
                        <span className="text-[rgba(0,0,255,0.8)] font-bold">
                            {roleID === 1 ? 'Admin' : roleID === 2 ? 'Doctor' : 'Supporter'}
                        </span>
                    </p>
                </div>
                <div className="mt-8">
                    <ul>
                        <li className="text-[#546ad8] font-bold">
                            MAIN NAVIGATION
                            <Link href="/users">
                                <div
                                    className={`py-2 px-4 cursor-pointer rounded text-black mt-4 flex items-center ${
                                        !category
                                            ? 'bg-[#e0f3ff]'
                                            : 'hover:bg-[#e0f3ff]'
                                    }`}
                                >
                                    <AiFillDashboard />
                                    <p className="ml-2 text-[14px]">Dashboard</p>
                                </div>
                            </Link>
                        </li>
                        {roleID === 1 && (
                            <li className="text-[#546ad8] font-bold mt-4">
                                ADMIN
                                <Link href="/users/allUsers">
                                    <div
                                        className={`py-2 px-4 cursor-pointer rounded text-black mt-4 flex items-center ${
                                            category === 'allUsers'
                                                ? 'bg-[#e0f3ff]'
                                                : 'hover:bg-[#e0f3ff]'
                                        }`}
                                    >
                                        <FiUsers />
                                        <p className="ml-2 text-[14px]">All Users</p>
                                    </div>
                                </Link>
                                <Link href="/users/allDoctors">
                                    <div
                                        className={`py-2 px-4 cursor-pointer rounded text-black mt-4 flex items-center ${
                                            category === 'allDoctors'
                                                ? 'bg-[#e0f3ff]'
                                                : 'hover:bg-[#e0f3ff]'
                                        }`}
                                    >
                                        <TbNurse />
                                        <p className="ml-2 text-[14px]">
                                            All Doctors
                                        </p>
                                    </div>
                                </Link>
                                <Link href="/users/allSupporters">
                                    <div
                                        className={`py-2 px-4 cursor-pointer rounded text-black mt-4 flex items-center ${
                                            category === 'allSupporters'
                                                ? 'bg-[#e0f3ff]'
                                                : 'hover:bg-[#e0f3ff]'
                                        }`}
                                    >
                                        <BiSupport />
                                        <p className="ml-2 text-[14px]">
                                            All Supporters
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        )}
                        {(roleID === 1 || roleID === 2) && (
                            <li className="text-[#546ad8] font-bold mt-4">
                                DOCTOR
                                <Link href="/users/booking">
                                    <div
                                        className={`py-2 px-4 cursor-pointer rounded text-black mt-4 flex items-center ${
                                            category === 'booking'
                                                ? 'bg-[#e0f3ff]'
                                                : 'hover:bg-[#e0f3ff]'
                                        }`}
                                    >
                                        <AiOutlineSchedule />
                                        <p className="ml-2 text-[14px]">Booking</p>
                                    </div>
                                </Link>
                            </li>
                        )}
                        {(roleID === 1 || roleID === 3) && (
                            <li className="text-[#546ad8] font-bold mt-4">
                                SUPPORTER
                                <Link href="/users/newpatient">
                                    <div
                                        className={`py-2 px-4 cursor-pointer rounded text-black mt-4 flex items-center ${
                                            category === 'newpatient'
                                                ? 'bg-[#e0f3ff]'
                                                : 'hover:bg-[#e0f3ff]'
                                        }`}
                                    >
                                        <FaUserAlt />
                                        <p className="ml-2 text-[14px]">
                                            New Patients
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    );
};
export default Sidebar;
