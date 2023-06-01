import { getCookie } from 'cookies-next';
import Image from 'next/image';
import {useState, useEffect} from 'react'
import Link from 'next/link'

const Heading = () => {
    const [cRoleID,setRoleID] =  useState<number>(0)
    const [imagePath, setImagePath] = useState<string>("")
    useEffect(() => {
        const cRoleID = getCookie('roleID');
        const imagePath = getCookie('avatar')
        setRoleID(Number(cRoleID));
        setImagePath(String(imagePath))
    }, []);
    return (
        <div className="bg-white h-[100px] flex items-center justify-end px-8">
            <p className='text-[#3333ff] font-bold'>{cRoleID === 1 ? 'Admin' : cRoleID === 2 ? 'Doctor' : 'Supporter' }</p>
            <Link href  ='/'>
                <div className="rounded-[50%] overflow-hidden w-[50px] h-[50px] ml-4 cursor-pointer">
                <Image
                    className="h-[50px]"
                    src={imagePath !== 'null' ? imagePath : 'https://www.surfcam.com/images/icons/hexagon/darkblue/MI_DARK_BLUE_ICON_SUPPORT.png'}
                    alt="avt"
                    height={100}
                    width={100}
                />
            </div>
            </Link>
        </div>
    );
};

export default Heading;
