import AuthLayout from '~/components/Layouts/AuthLayout';
import { NextPageWithLayout } from '~/types';
import React, { useId, useState } from 'react';

const LoginPage: NextPageWithLayout = () => {
    const emailId = useId();
    const passwordId = useId();
    const rePasswordId = useId();

    return (
        <form className="w-full h-full p-4 pt-12 flex flex-col gap-8">
            <img className="h-20 w-20" src="images/Logo HPO.png" alt="Logo HPO" />
            <h1 className="font-bold text-lg">HEALTHCARE & PHARMACY ONLINE</h1>
            <div className="w-full flex flex-col gap-2">
                <label className="text-gray-600 font-semibold" htmlFor={emailId}>
                    EMAIL:
                </label>

                <input
                    className="text-base bg-transparent border-b border-black outline-none p-1 focus:border-indigo-900 focus:border-b-2 "
                    type="text"
                    name="email"
                    placeholder="Email"
                    id={emailId}
                    value={''}
                />
            </div>

            <div className="w-full flex flex-col gap-2">
                <label className="text-gray-600 font-semibold" htmlFor={''}>
                    PASSWORD:
                </label>

                <div className="flex flex-row relative">
                    <input
                        className="flex-1 text-base bg-transparent border-b border-black outline-none p-1 focus:border-indigo-900 focus:border-b-2 "
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={''}
                    />
                    <button className="h-full absolute right-1 flex items-center justify-center">
                        <i className="fa fa-eye"></i>
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col gap-2">
                <label className="text-gray-600 font-semibold" htmlFor={''}>
                    PASSWORD:
                </label>

                <input
                    className="text-base bg-transparent border-b border-black outline-none p-1 focus:border-indigo-900 focus:border-b-2 "
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={''}
                />
            </div>
        </form>
    );
};

LoginPage.getLayout = (page: React.ReactElement) => {
    return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;
