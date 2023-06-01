import { NextPage } from 'next';

interface iProps {
    heading: string;
    total: number;
    borderColor: string;
}

const CardItem: NextPage<iProps> = (props) => {
    const { heading, total, borderColor } = props;
    return (
        <div
            className={`w-[300px] h-[100px] rounded bg-white shadow-md border-l-4 border-${borderColor}-300 ml-8 text-center`}
        >
            <div className="mt-4">
                <h3 className="text-lg font-bold">{heading}</h3>
                <p className='mt-2'>{total}</p>
            </div>
        </div>
    );
};

export default CardItem;
