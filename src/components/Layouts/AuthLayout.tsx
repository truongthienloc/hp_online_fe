import clsx from 'clsx';
import { LayoutProbs } from '~/types';
import style from '~/styles/authPage.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

function AuthLayout({ children }: LayoutProbs) {
    return (
        <div className="bg-[#91d2d8]">
            <div className="h-full opacity-30 bg-black z-50 w-full absolute top-0 left-0"></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
            >
                <div className="min-h-screen flex items-center justify-center">
                    <div
                        className={clsx(
                            'z-[100] h-[700px] w-[1000px] flex flex-row rounded-md shadow-md  bg-white',
                        )}
                    >
                        <div
                            className={clsx(
                                'h-full flex-1 rounded-[inherit] rounded-e-none flex flex-col justify-end',
                                style['auth-intro'],
                            )}
                        >
                            <img
                                className="= rounded-tl-[inherit]"
                                src="https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=826&t=st=1685352285~exp=1685352885~hmac=5d98fbea7a4bcd3edea2bc3d2651c7a48be03dcfaf9c5b768412122fd5d9f3af"
                                alt="doctor"
                            />
                            <div
                                className={clsx(
                                    'p-4 py-8 flex-1 w-full h-40 flex flex-col gap-2 bg-[#91d2d8] text-white rounded-b-[0.375rem]',
                                    style['auth-intro__info'],
                                )}
                            >
                                <h1 className="font-bold">
                                    WELCOME TO HEALTHCARE & PHARMACY ONLINE
                                </h1>
                                <p className="text-[16px]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eos eum possimus illum omnis
                                    inventore. Eos aperiam consectetur facere. Alias
                                    ducimus voluptate laudantium numquam laboriosam
                                    doloribus, ad sit sint molestias autem
                                </p>
                            </div>
                        </div>

                        <div className="h-full flex-1">{children}</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AuthLayout;
