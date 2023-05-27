import Link from 'next/link';
import clsx from 'clsx';
import React, { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import Axios from '~/utils/Axios';
import AuthLayout from '~/components/Layouts/AuthLayout';
import { NextPageWithLayout } from '~/types';
import { FieldValues } from 'react-hook-form/dist/types';

const RegisterPage: NextPageWithLayout = () => {
    const emailId = useId();
    const passwordId = useId();
    const rePasswordId = useId();
    const [hiddenPassword, setHiddenPassword] = useState(true);
    const [hiddenRePassword, setHiddenRePassword] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: FieldValues) => {
        try {
            if (data.password !== data.rePassword) {
                return toast.error('2 password không trùng khớp!');
            }

            const res = await Axios({
                method: 'post',
                url: '/signup',
                data: {
                    email: data.email,
                    password: data.password,
                },
            });

            const resData = res.data;

            toast.success('Đăng ký thành công.');
        } catch (error) {
            toast.error('Đăng ký thất bại.');
        }
    };

    const handleHiddenPassword = (e: React.MouseEvent) => {
        e.preventDefault();
        setHiddenPassword((prevState) => !prevState);
        const inputPassword = document.getElementById(
            passwordId,
        ) as HTMLInputElement;
        inputPassword.focus();
    };

    const handleHiddenRePassword = (e: React.MouseEvent) => {
        e.preventDefault();
        setHiddenRePassword((prevState) => !prevState);
        const inputRePassword = document.getElementById(
            rePasswordId,
        ) as HTMLInputElement;
        inputRePassword.focus();
    };

    return (
        <form
            className="w-full h-full p-4 pt-8 flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <img className="h-20 w-20" src="images/Logo HPO.png" alt="Logo HPO" />
            <h1 className="font-bold text-lg">HEALTHCARE & PHARMACY ONLINE</h1>
            <h2 className="font-bold text-lg">REGISTER</h2>
            <div className="w-full flex flex-col gap-1">
                <label className="text-gray-600 font-bold" htmlFor={emailId}>
                    EMAIL:
                </label>
                {errors.email && (
                    <p className="text-red-600">
                        * {errors.email.message as string}
                    </p>
                )}
                <input
                    {...register('email', { required: 'Enter your email' })}
                    className="text-base bg-transparent border-b border-black outline-none p-1 focus:border-indigo-900 focus:border-b-2 "
                    type="text"
                    placeholder="Email"
                    id={emailId}
                />
            </div>

            <div className="w-full flex flex-col gap-2">
                <label className="text-gray-600 font-bold" htmlFor={passwordId}>
                    PASSWORD:
                </label>
                {errors.password && (
                    <p className="text-red-700">
                        * {errors.password.message as string}
                    </p>
                )}
                <div className="flex flex-row relative">
                    <input
                        {...register('password', {
                            required: 'Enter your password',
                        })}
                        className="flex-1 text-base bg-transparent border-b border-black outline-none p-1 focus:border-indigo-900 focus:border-b-2 "
                        type={hiddenPassword ? 'password' : 'text'}
                        placeholder="Password"
                        id={passwordId}
                    />
                    <button
                        className="h-full absolute right-1 flex items-center justify-center"
                        onClick={handleHiddenPassword}
                    >
                        <i
                            className={clsx('fa', {
                                'fa-eye': hiddenPassword,
                                'fa-eye-slash': !hiddenPassword,
                            })}
                        ></i>
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col gap-2">
                <label className="text-gray-600 font-bold" htmlFor={rePasswordId}>
                    RE-PASSWORD:
                </label>
                {errors.rePassword && (
                    <p className="text-red-700">
                        * {errors.rePassword.message as string}
                    </p>
                )}
                <div className="flex flex-row relative">
                    <input
                        {...register('rePassword', {
                            required: 'Enter your re-password',
                        })}
                        className="flex-1 text-base bg-transparent border-b border-black outline-none p-1 focus:border-indigo-900 focus:border-b-2"
                        type={hiddenRePassword ? 'password' : 'text'}
                        placeholder="Re-password"
                        id={rePasswordId}
                    />
                    <button
                        className="h-full absolute right-1 flex items-center justify-center"
                        onClick={handleHiddenRePassword}
                    >
                        <i
                            className={clsx('fa', {
                                'fa-eye': hiddenRePassword,
                                'fa-eye-slash': !hiddenRePassword,
                            })}
                        ></i>
                    </button>
                </div>
            </div>

            <button
                className="h-8 rounded font-bold text-white bg-primary flex items-center justify-center"
                type="submit"
            >
                LOGIN
            </button>

            <div className="flex flex-row justify-center gap-2">
                <span>Have an account.</span>
                <Link
                    href={'/login'}
                    className="text-orange-600 hover:text-violet-700"
                >
                    Login
                </Link>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </form>
    );
};

RegisterPage.getLayout = (page: React.ReactElement) => {
    return <AuthLayout>{page}</AuthLayout>;
};

export default RegisterPage;
