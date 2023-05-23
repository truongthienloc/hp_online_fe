import { Inter } from 'next/font/google';
import { NextPage } from 'next';

import Introduce from '~/components/Homepage/Introduce';
import Solutions from '~/components/Homepage/Solutions';
import DoctorsIntro from '~/components/Homepage/DoctorsIntro';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
