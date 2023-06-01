import Image from 'next/image';

const Heading = () => {
    return (
        <div className="bg-white h-[100px] flex items-center justify-end px-8">
            <p>admin | James</p>
            <div className="rounded-[50%] overflow-hidden w-[50px] h-[50px] ml-4 cursor-pointer">
                <img
                    className="h-[50px]"
                    src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
                    alt="avt"
                    height={100}
                    width={100}
                />
            </div>
        </div>
    );
};

export default Heading;
