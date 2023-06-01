import { useRouter } from 'next/router';

import AllUsers from './allusers';
import AllDoctors from './alldoctors';
import AllSupporters from './allsupporters';
import Booking from './booking';
import UpdatePatient from './newpatient';
import { NextPageWithLayout } from '~/types';
import AdminLayOut from '~/components/Layouts/AdminLayout';
import Dashboard from '~/components/AdminPage/dashboard';
const Category: NextPageWithLayout = () => {
    const router = useRouter();
    const { category } = router.query;
    return (
        <div>
            {!category ? (
                <Dashboard/>
            ) : category === 'allUsers' ? (
                <AllUsers />
            ) : category === 'allDoctors' ? (
                <AllDoctors />
            ) : category === 'allSupporters' ? (
                <AllSupporters />
            ) : category === 'Booking' ? (
                <Booking />
            ) : category === 'Newpatient' ? (
                <UpdatePatient />
            ) : (
                ''
            )}
        </div>
    );
};
Category.getLayout = (page: React.ReactElement) => {
    return <AdminLayOut>{page}</AdminLayOut>;
};
export default Category;
