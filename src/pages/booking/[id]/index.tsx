import type { GetServerSideProps } from 'next';

function DoctorDetailPage({ data }: { data: IData | null }) {
    const name = data?.name || 'Trương Thiên Lộc';
    const title = data?.title || 'Chuyên viên tâm lí';
    const detail =
        data?.detail ||
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure exercitationem cumque, sint eveniet dolores ipsum, aspernatur tenetur alias repellendus error nemo harum a eos reiciendis, rem consequuntur recusandae maiores.';
    const avatar = data?.avatar || '/images/doctor-01.jpg';

    return (
        <main className="min-h-screen flex flex-row pt-14 pl-4">
            <div className="mt-2 w-[65vw] flex flex-col gap-4 overflow-auto">
                <div className="flex flex-col items-center">
                    <img className="h-52" src={avatar} alt={name} />
                </div>
                <div className="flex flex-col p-4 gap-2">
                    <p className="font-bold">{name}</p>
                    <p className="font-semibold">Chức danh: {title}</p>
                </div>
                <p>{detail}</p>
            </div>

            <div className="flex-1 bg-primary"></div>
        </main>
    );
}

export default DoctorDetailPage;

interface IData {
    name: string;
    title: string;
    detail: string;
    avatar: string;
    available?: string[];
}

export const getServerSideProps: GetServerSideProps<
    { data: IData } | { data: null }
> = async (ctx) => {
    try {
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        const id = ctx.params?.id;
        const res = await fetch(`${url}/employee?id=${id}`);
        const data = (await res.json()) as IData;

        return {
            props: {
                data: data,
            },
        };
    } catch (err) {
        return {
            props: {
                data: null,
            },
        };
    }
};
