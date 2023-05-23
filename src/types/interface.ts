import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React from 'react';

export interface LayoutProbs {
    children: React.ReactNode;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
