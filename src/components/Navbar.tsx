import Link from 'next/link';
import { getCookies, hasCookie } from 'cookies-next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
function Navbar() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setIsLogin(hasCookie('id'));
    }, []);

    return (
        <nav className="w-full h-[60px] flex flex-row gap-16  bg-primary fixed shadow z-[999]">
            <div className="flex-1 flex justify-center p-1">
                <Link href="/">
                    <img    
                        className="h-full hover:scale-125 transition"
                        src="/images/Logo HPO.png"
                        alt="Trang chủ"
                    />
                </Link>
            </div>

            <div className="flex-[3] flex flex-row justify-evenly items-center">
                <NavItem href="/" name="TRANG CHỦ" />
                <NavItem href="/booking" name="ĐẶT LỊCH" />
                <NavItem href="/pharmacy" name="NHÀ THUỐC" />
            </div>

            <div className="flex-1 flex flex-row justify-end gap-6 items-center">
                <Link
                    className="hover:bg-[#4261a9] w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                    href="/booking/search"
                >
                    <i className="fa fa-search text-white"></i>
                </Link>
                {isLogin ? (
                    <Link
                        className="mr-4 bg-white hover:bg-gray-400 w-8 h-8 flex items-center justify-center rounded transition-colors"
                        href="/login"
                    >
                        <i className="fa fa-user text-violet-600"></i>
                    </Link>
                ) : (
                    <Link
                        className="mr-4 hover:bg-[#4261a9] w-8 h-8 flex items-center justify-center rounded transition-colors"
                        href="/login"
                    >
                        <i className="fa fa-user text-white"></i>
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;

interface INavItemProps {
    href: string;
    name: string;
}
function NavItem({ href, name }: INavItemProps) {
    return (
        <Link
            className="font-bold text-white text-lg hover:bg-[#4261a9] h-full flex flex-row w-full items-center justify-center transition-colors"
            href={href}
        >
            {name}
        </Link>
    );
}
