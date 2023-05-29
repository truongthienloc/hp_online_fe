import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
interface iProps {
    name: string;
    pathName: string;
    price: number;
    quantity: number;
    setQuantity: any;
    totalPrice: number;
    setTotalPrice: any;
}

const ProductCart: NextPage<iProps> = (props) => {
    const { name, pathName, price, setQuantity, quantity, setTotalPrice } = props;
    const [productQuantity, setProductQuantity] = useState(quantity);
    const handleMinusClick = () => {
        setQuantity((prevState: number) => {
            return prevState === 1 ? 1 : prevState - 1;
        });
        setProductQuantity((prevState: number) => {
            return prevState === 1 ? 1 : prevState - 1;
        });
        setTotalPrice((prevState: number) => prevState - quantity * price);
    };
    const handlePlusClick = () => {
        setQuantity((prevState: number) => prevState + 1);
        setProductQuantity((prevState: number) => prevState + 1);
        setTotalPrice((prevState: number) => prevState + quantity * price);
    };
    return (
        <div className="flex items-center mt-4 cursor-pointer ">
            <div className="w-[20%]">
                <Image src={pathName} alt="image" width={100} height={100} />
            </div>
            <div className="w-[60%] mx-4">
                <p className="text-[14px]">{name}</p>
            </div>
            <div className="text-center">
                <p className="text-[14px]">{price}đ/Hộp</p>
                <div className="mt-2">
                    <button
                        onClick={handleMinusClick}
                        className="border border-solid border-[#efefef] px-[8px] "
                    >
                        -
                    </button>
                    <span className=" bg-[#f5f5f7] px-[4px]">{productQuantity}</span>
                    <button
                        onClick={handlePlusClick}
                        className="border border-solid border-[#efefef] px-[8px] "
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductCart;
