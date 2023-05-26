import clsx from 'clsx';
import { LayoutProbs } from '~/types';
import style from '~/styles/authPage.module.scss';

function AuthLayout({ children }: LayoutProbs) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div
                className={clsx(
                    'h-[700px] w-[700px] flex flex-row rounded-md shadow-lg shadow-gray-600',
                    style['form-gradient'],
                )}
            >
                <div className="h-full flex-1 rounded-[inherit] rounded-e-none"></div>

                <div className="h-full flex-1">{children}</div>
            </div>
        </div>
    );
}

export default AuthLayout;
