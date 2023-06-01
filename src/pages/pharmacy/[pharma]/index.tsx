import { Button, Input, Space } from 'antd';
import { useRouter } from 'next/router';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const { Search } = Input;

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { GetServerSideProps } from 'next/types';
import Axios from '~/utils/Axios';

import MedicineCard, {
    IMedicineCardProps,
} from '~/components/Pharmacy/MedicineCard';
import { IPharmacyData } from '~/components/Pharmacy/PharmacyCard';

const PharmacyDetail = ({ medicines }: IPharmacyDetailProps) => {
    const [medicinesRender, setMedicinesRender] = useState<IMedicineCardProps[]>([]);
    const router = useRouter();
    const { pharma } = router.query;

    useEffect(() => {
        setMedicinesRender(medicines || []);
    }, []);

    const onSearch = async (value: string) => {
        if (value === '') {
            toast.error('Vui lòng không để trống ô tìm kiếm');
            return;
        }

        try {
            const res = await toast.promise(
                Axios.get(`/search-advanced?pharmacyName=${pharma}&valueSearch=${value}`),
                {
                    pending: 'Đang tìm kiếm thuốc phù hợp',
                    success: 'Đã tìm được thuốc phù hợp',
                    error: 'Tìm thuốc thất bại',
                },
                {
                    autoClose: 3000,
                    pauseOnHover: false,
                },
            );

            const data = res.data as IMedicineCardProps[];
            setMedicinesRender(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddingCart = (medicine: IMedicineCardProps) => {
        const { pharmacyName, medicineName } = medicine;
        const orders = JSON.parse(localStorage.getItem(pharmacyName) || '{}');

        if (orders[medicineName]) {
            orders[medicineName].quantity += 1;
        } else {
            orders[medicineName] = { ...medicine };
            orders[medicineName].quantity = 1;
        }
        localStorage.setItem(pharmacyName, JSON.stringify(orders));

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
            <div className="flex flex-wrap  items-stretch">
                {medicinesRender &&
                    medicinesRender.map((value) => (
                        <MedicineCard
                            key={value.medicineName}
                            pharmacyName={value.pharmacyName}
                            medicineName={value.medicineName}
                            description={value.description}
                            price={value.price}
                            quantity={value.quantity}
                            image={value.image}
                            onAddingCart={() => {
                                handleAddingCart(value);
                            }}
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
