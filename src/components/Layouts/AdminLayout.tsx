import { NextPage } from 'next';
import Heading from '~/pages/users/heading';
import Sidebar from '~/pages/users/sidebar';
import { LayoutProbs } from '~/types';

const AdminLayOut: NextPage<LayoutProbs> = ({ children }: LayoutProbs) => {
    return (
        <div className="bg-[#f3f4f8]">
            <div className="flex h-screen">
                <Sidebar />
                <div className="w-[85%]">
                    <Heading />
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
};
export default AdminLayOut;
