import React from 'react';
import { LayoutProbs } from '~/types';
import Navbar from '../Navbar';
import Footer from '../Footer';

function DefaultLayout({ children }: LayoutProbs) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default DefaultLayout;
