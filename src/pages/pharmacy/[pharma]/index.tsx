import { Button, Input, Space } from 'antd';
import { useRouter } from 'next/router';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const { Search } = Input;

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useEffect } from 'react';

import { GetServerSideProps } from 'next/types';
import Axios from '~/utils/Axios';

import MedicineCard, {
    IMedicineCardProps,
} from '~/components/Pharmacy/MedicineCard';
import { IPharmacyData } from '~/components/Pharmacy/PharmacyCard';

const PharmacyDetail = ({ medicines }: IPharmacyDetailProps) => {
    const onSearch = (value: string) => console.log(value);
    const router = useRouter();
    const { pharma } = router.query;

    useEffect(() => {}, []);

    const notify = () => {
        toast.success('Bạn đã thêm sản phẩm giỏ hàng thành công');
    };

    return (
        <div className="pt-[50px] mb-[250px]  ">
            <div
                className={`px-12 h-[150px] bg-[#17196c] flex items-center justify-between`}
            >
                <div className="flex items-center">
                    <h1 className="text-white text-3xl font-bold">{pharma}</h1>
                </div>
                <div>
                    <Search
                        placeholder="Nhập một loại thuốc bạn muốn tìm kiếm..."
                        allowClear
                        size="large"
                        onSearch={onSearch}
                        className="w-[500px]"
                        enterButton="Search"
                    />
                </div>
                <div className=" cursor-pointer opacity-30 hover:opacity-100 duration-100 ">
                    <Link className="flex" href={`${pharma}/cart`}>
                        <p className="text-lg text-white">Giỏ hàng</p>
                        <AiOutlineShoppingCart className="ml-2 text-3xl text-white" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {medicines &&
                    medicines.map((value) => (
                        <MedicineCard
                            key={value.medicineName}
                            medicineName={value.medicineName}
                            description={value.description}
                            price={value.price}
                            quantity={value.quantity}
                            image={value.image}
                            onAddingCart={notify}
                        />
                    ))}
            </div>
            <ToastContainer theme="light" />
        </div>
    );
};
export default PharmacyDetail;

interface IPharmacyDetailProps {
    medicines: IMedicineCardProps[] | null;
    pharmacyInfo: IPharmacyData | null;
}

export const getServerSideProps: GetServerSideProps<IPharmacyDetailProps> = async (
    req,
) => {
    try {
        const pharmacyName = req.query.pharma;

        const resMedicines = await Axios.get(
            `/get-all-medicine-pharmacy?pharmacyName=${pharmacyName}`,
        );
        const dataMedicines = resMedicines.data as IMedicineCardProps[];

        const resPharmacies = await Axios.get('/get-all-pharmacy');
        const dataPharmacies = resPharmacies.data as IPharmacyData[];

        const dataPharmacy = dataPharmacies.find(
            (value) => value.name === pharmacyName,
        ) as IPharmacyData | null;

        return {
            props: {
                medicines: dataMedicines,
                pharmacyInfo: dataPharmacy,
            },
        };
    } catch (err) {
        console.log('err: ', err);
        return {
            props: {
                medicines: null,
                pharmacyInfo: null,
            },
        };
    }
};
