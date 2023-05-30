import PharmacyCard, { IPharmacyData } from '~/components/Pharmacy/PharmacyCard';

import { GetServerSideProps } from 'next/types';
import Axios from '~/utils/Axios';

const Pharmacy = ({ pharmacies }: IPharmaciesData) => {
    return (
        <div className="pt-[100px] mb-12 flex flex-col items-center">
            <div>
                <h1 className="font-bold text-lg">Danh sách các nhà thuốc</h1>
            </div>
            <div className="flex items-stretch mt-4">
                {
                    // Render All Pharmacy
                    pharmacies &&
                        pharmacies.map((value) => (
                            <PharmacyCard
                                key={value.name}
                                name={value.name}
                                address={value.address}
                                description={value.description}
                                longName={value.longName}
                                image={value.image}
                            />
                        ))
                }
            </div>
        </div>
    );
};
export default Pharmacy;

interface IPharmaciesData {
    pharmacies: IPharmacyData[] | null;
}

export const getServerSideProps: GetServerSideProps<IPharmaciesData> = async () => {
    try {
        const res = await Axios.get('/get-all-pharmacy');
        console.log(res.data);
        const data = res.data as IPharmacyData[];

        return {
            props: {
                pharmacies: data,
            },
        };
    } catch (err) {
        return {
            props: {
                pharmacies: null,
            },
        };
    }
};
