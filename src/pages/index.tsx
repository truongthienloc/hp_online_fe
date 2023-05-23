import { Inter } from 'next/font/google';
// import Script from 'next/script';
import Head from 'next/head';
import { useEffect } from 'react';
/**@ts-ignore */
import AOS from 'aos';
import 'aos/dist/aos.css';

import Introduce from '~/components/Homepage/Introduce';
import Solutions from '~/components/Homepage/Solutions';
import DoctorsIntro from '~/components/Homepage/DoctorsIntro';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <main
            className={`flex min-h-screen flex-col overflow-auto items-center justify-between p-24 pb-14 ${inter.className}`}
        >
            <Introduce />
            <Solutions />
            <DoctorsIntro />
        </main>
    );
}
