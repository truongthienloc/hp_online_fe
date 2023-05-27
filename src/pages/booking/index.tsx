import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

function BookingPage({ data }: { data: IData | null }) {
    const doctors = data?.doctors;

    // console.log(data);

    return (
        <main className="min-h-screen justify-center p-12 pt-28 flex flex-row gap-8 flex-wrap">
            {/* TODO: Render doctors */}

            {doctors?.map((doctor) => (
                <DoctorItem
                    key={doctor.id}
                    id={doctor.id}
                    name={doctor.name}
                    specialist={doctor.specialist}
                    avatar={doctor.avatar}
                />
            ))}
            {/* <DoctorItem
                id="12345"
                name="Trương Thiên Lộc"
                specialist="Chuyên viên tâm lí"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                specialist="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                specialist="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                specialist="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                specialist="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                specialist="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                specialist="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                specialist="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            /> */}
        </main>
    );
}

export default BookingPage;

interface IDoctorData {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    specialist: string;
    gender: string;
    avatar: string;
}

interface IData {
    doctors: IDoctorData[];
}

export const getServerSideProps: GetServerSideProps<
    { data: IData } | { data: null }
> = async (ctx) => {
    try {
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        // const id = ctx.params?.id;
        const res = await fetch(`${url}/get-all-doctor`);
        // console.log("data: ", res);
        const doctors = (await res.json()) as IDoctorData[];

        // console.log("data: ", doctors);

        return {
            props: {
                data: {
                    doctors: doctors,
                },
            },
        };
    } catch (err) {
        // console.log("error", err);
        return {
            props: {
                data: null,
            },
        };
    }
};

interface IDoctorItemProps {
    id?: string;
    name: string;
    specialist: string;
    avatar: string;
}

function DoctorItem({ id, name, specialist, avatar }: IDoctorItemProps) {
    const router = useRouter();

    const handleClickDetail = () => {
        if (!id) {
            return;
        }

        router.push(`/booking/${id}`);
    };

    return (
        <div className="p-4 basis-80 max-w-[580px] flex-grow flex-shrink-0 bg-slate-200 shadow-gray-400 shadow-lg flex flex-col gap-2">
            <img src={avatar} alt={name} />
            <p className="font-bold font-time-new-roman text-2xl">{name}</p>
            <p className="font-bold font-time-new-roman text-xl text-stone-500">
                {specialist}
            </p>
            <button
                className="bg-primary font-semibold text-white p-1"
                onClick={handleClickDetail}
            >
                Chi tiết
            </button>
        </div>
    );
}
