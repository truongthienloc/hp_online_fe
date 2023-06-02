import { useRouter } from 'next/router';

import AllUsers from './allusers';
import AllDoctors from './alldoctors';
import AllSupporters from './allsupporters';

import BasicDatePicker from '../../components/AdminPage/booking';
import { NextPageWithLayout } from '~/types';
import AdminLayOut from '~/components/Layouts/AdminLayout';
import Dashboard from '~/components/AdminPage/dashboard';
import UpdatePatient from '../../components/AdminPage/newpatient';
const Category: NextPageWithLayout = () => {
    const router = useRouter();
    const { category } = router.query;
    console.log(category)
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
            ) : category === 'booking' ? (
                <BasicDatePicker/>
            ) : category === 'newpatient' ? (
                <UpdatePatient/>
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
