function Footer() {
    return (
        <div className="w-full p-4 flex flex-col items-center bg-black gap-4">
            <div className="flex flex-row items-center gap-4">
                <img className="h-16" src="/images/Logo HPO.png" alt="HPO" />
                <span className="text-white text-lg font-bold font-serif">
                    Được phát triển bởi
                </span>
                <img className="h-16" src="/images/Logo WDT - round.png" alt="WDT" />
            </div>

            <div className="text-white">Liên hệ với chúng tôi</div>

            <div className="flex flex-row gap-8 text-white text-3xl">
                <a
                    href=""
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-white"
                >
                    <i className="fa fa-facebook"></i>
                </a>
                <a
                    href=""
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-white"
                >
                    <i className="fa fa-twitter"></i>
                </a>
            </div>

            <div className="text-white">
                2023 All rights reserved. <a className="text-orange-600">WDT</a>
            </div>
        </div>
    );
}

export default Footer;
