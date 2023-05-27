import clsx from 'clsx';
import { LayoutProbs } from '~/types';
import style from '~/styles/authPage.module.scss';

function AuthLayout({ children }: LayoutProbs) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div
                className={clsx(
                    'h-[700px] w-[800px] flex flex-row rounded-md shadow-lg shadow-gray-600',
                    style['form-gradient'],
                )}
            >
                <div
                    className={clsx(
                        'h-full flex-1 rounded-[inherit] rounded-e-none flex flex-col justify-end',
                        style['auth-intro'],
                    )}
                >
                    <img
                        className="rounded-b-2xl rounded-tl-[inherit]"
                        src="images/doctor-04.jpg"
                        alt="doctor"
                    />
                    <div
                        className={clsx(
                            'flex-1 w-full h-40 flex flex-col gap-2 bg-primary text-white p-4 rounded-bl-[inherit]',
                            style['auth-intro__info'],
                        )}
                    >
                        <h1 className="font-bold">
                            WELCOME TO HEALTHCARE & PHARMACY ONLINE
                        </h1>
                        <p className="font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eos eum possimus illum omnis inventore. Eos aperiam
                            consectetur facere. Alias ducimus voluptate laudantium
                            numquam laboriosam doloribus, ad sit sint molestias autem
                        </p>
                    </div>
                </div>

                <div className="h-full flex-1">{children}</div>
            </div>
        </div>
    );
}

export default AuthLayout;
