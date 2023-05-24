import Link from 'next/link';
import Head from 'next/head';

function Navbar() {
    return (
        <nav className="w-full h-[60px] flex flex-row gap-16 bg-primary fixed shadow z-10">
            <Head key={'navbar'}>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </Head>

            <div className="flex-1 flex justify-center p-1">
                <Link href="/">
                    <img
                        className="h-full hover:scale-125 transition"
                        src="images/Logo HPO.png"
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
                    href="/search"
                >
                    <i className="fa fa-search text-white"></i>
                </Link>
                <Link
                    className="mr-4 hover:bg-[#4261a9] w-8 h-8 flex items-center justify-center rounded transition-colors"
                    href="/login"
                >
                    <i className="fa fa-user text-white"></i>
                </Link>
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
