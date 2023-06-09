import Link from 'next/link';
import clsx from 'clsx';
import React, { useEffect, useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { hasCookie, setCookie, deleteCookie } from 'cookies-next';
import { ToastContainer, toast } from 'react-toastify';

import Axios from '~/utils/Axios';
import AuthLayout from '~/components/Layouts/AuthLayout';
import { NextPageWithLayout } from '~/types';
import { FieldValues } from 'react-hook-form/dist/types';

const LoginPage: NextPageWithLayout = () => {
    const emailId = useId();
    const passwordId = useId();
    const [hiddenPassword, setHiddenPassword] = useState(true);

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        deleteCookie('id');
        deleteCookie('roleID');
        deleteCookie('email');

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
            const res = await toast.promise(
                Axios.post('/login', data),
                {
                    pending: 'Đang đăng nhập',
                    success: 'Đăng nhập thành công',
                    error: 'Đăng nhập thất bại',
                },
                {
                    autoClose: 3000,
                    pauseOnHover: false,
                },
            );
                console.log(res.data)
            if (res.data.roleID) {
                setCookie('employeeID',res.data.employeeID)
                setCookie('email', res.data.email);
                setCookie('roleID', res.data.roleID);
                setCookie('avatar',res.data.avatar)
                setTimeout(() => {
                    router.push('/users');
                }, 3000);
            } else {
                setCookie('id', res.data.id);

                setTimeout(() => {
                    router.push('/');
                }, 3000);
            }
        } catch (err) {
            console.error(err);
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

    return (
        <form
            className="w-full h-full p-4 pt-12 flex flex-col gap-8"
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
            <h2 className="text-center font-bold text-lg">LOGIN</h2>
            <div className="w-full flex flex-col gap-2">
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
                    name="email"
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
                        name="password"
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

            <button
                id="submit"
                className="h-8 rounded-[24px] font-bold  duration-150 text-white bg-[#91d2d8] flex items-center justify-center"
                type="submit"
            >
                LOGIN
            </button>

            <div className="flex flex-row justify-center gap-2">
                <span>Nếu không có tài khoản?</span>
                <Link
                    href={'/register'}
                    className="text-orange-600 hover:text-[#91d2d8]"
                >
                    Đăng kí ngay
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

LoginPage.getLayout = (page: React.ReactElement) => {
    return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;
