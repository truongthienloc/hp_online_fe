import { useRouter } from 'next/router';

function BookingPage() {
    return (
        <main className="min-h-screen justify-center p-12 pt-28 flex flex-row gap-8 flex-wrap">
            <DoctorItem
                id="12345"
                name="Trương Thiên Lộc"
                title="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                title="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                title="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                title="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                title="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                title="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                title="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
            <DoctorItem
                name="ABC"
                title="Tư vấn viên dinh dưỡng"
                avatar="images/doctor-01.jpg"
            />
        </main>
    );
}

export default BookingPage;

interface IDoctorItemProps {
    id?: string;
    name: string;
    title: string;
    avatar: string;
}

function DoctorItem({ id, name, title, avatar }: IDoctorItemProps) {
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
                {title}
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
