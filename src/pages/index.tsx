import { Inter } from 'next/font/google';
import { useEffect } from 'react';
/**@ts-ignore */
import AOS from 'aos';
import 'aos/dist/aos.css';

import Introduce from '~/components/Homepage/Introduce';
import Solutions from '~/components/Homepage/Solutions';
import DoctorsIntro from '~/components/Homepage/DoctorsIntro';
import ResultIntro from '~/components/Homepage/ResultIntro';
import DoctorSchedule from '~/components/Homepage/DoctorSchedule';
import TabSpecialist from '~/components/Homepage/Tabs';
import BeforeAfter from '~/components/BeforeAfter';
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
            <ResultIntro />
            <DoctorSchedule/>
            <TabSpecialist/>
            <DoctorsIntro />
            <BeforeAfter/>
        </main>
    );
}
