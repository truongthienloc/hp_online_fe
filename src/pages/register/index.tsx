import Link from 'next/link';
import clsx from 'clsx';
import React, { useId, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

import Axios from '~/utils/Axios';
import AuthLayout from '~/components/Layouts/AuthLayout';
import { NextPageWithLayout } from '~/types';
import { FieldValues } from 'react-hook-form/dist/types';

const RegisterPage: NextPageWithLayout = () => {
    const router = useRouter();
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

    useEffect(() => {
        const submit = document.querySelector('#submit') as HTMLButtonElement;
        const handleEnterPress = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                submit.click();
            }
        };
        document.addEventListener('keydown', handleEnterPress);

        return () => {
            document.removeEventListener('keydown', handleEnterPress);
        };
    }, []);

    const onSubmit = async (data: FieldValues) => {
        try {
            if (data.password !== data.rePassword) {
                return toast.error('2 password không trùng khớp!');
            }

            const res = await toast.promise(
                Axios({
                    method: 'post',
                    url: '/signup',
                    data: {
                        email: data.email,
                        password: data.password,
                    },
                }),
                {
                    pending: 'Đang đăng kí tài khoản',
                    success: 'Đăng kí thành công',
                    error: 'Đăng kí thất bại',
                },
                {
                    autoClose: 3000,
                    pauseOnHover: false,
                },
            );

            const resData = res.data;

            setTimeout(() => {
                router.push('/login');
            }, 3000);

            // toast.success('Đăng ký thành công.');
        } catch (error) {
            // toast.error('Đăng ký thất bại.');
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
            <div className="flex justify-center">
                <img
                    className="h-20 w-20"
                    src="images/Logo HPO.png"
                    alt="Logo HPO"
                />
            </div>
            <h1 className="text-center font-bold text-lg">
                HEALTHCARE & PHARMACY ONLINE
            </h1>
            <h2 className="text-center font-bold text-lg">REGISTER</h2>
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
                    className="opacity-50 focus:opacity-100 duration-150 p-2 px-4 rounded-[24px] flex-1 text-base bg-transparent border-b  outline-none  border-indigo-900 border "
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
                        className="opacity-50 focus:opacity-100 duration-150 p-2 px-4 rounded-[24px] flex-1 text-base bg-transparent border-b  outline-none  border-indigo-900 border "
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
                        className="opacity-50 focus:opacity-100 duration-150 p-2 px-4 rounded-[24px] flex-1 text-base bg-transparent border-b  outline-none  border-indigo-900 border"
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
                id="submit"
                className="h-8 rounded-[24px] font-bold  duration-150 text-white bg-[#91d2d8] flex items-center justify-center"
                type="submit"
            >
                SIGNUP
            </button>

            <div className="flex flex-row justify-center gap-2">
                <span>Have an account.</span>
                <Link
                    href={'/login'}
                    className="text-orange-600 hover:text-[#91d2d8]"
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
