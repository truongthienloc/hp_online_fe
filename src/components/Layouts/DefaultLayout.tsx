import React from 'react';
import { LayoutProbs } from '~/types';
import Navbar from '../Navbar';

function DefaultLayout({ children }: LayoutProbs) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default DefaultLayout;
