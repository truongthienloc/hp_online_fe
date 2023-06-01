import ProductCart from '~/components/ProductCart';
import { Button, Input } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '~/hooks/useLocalStorage';

// let data: any = [];

const Cart = () => {
    const router = useRouter()
    const pharmacyName:any = router.query.pharma
    // if (typeof window !== 'undefined'){
    //     const orders = JSON.parse(localStorage.getItem(pharmacyName) || '{}');
    //     setData(orders)
    //     console.log(orders)
    // }
    let data:any = []
    let initialPrice:number;
    let initialLength:number;
    const [quantity, setQuantity] = useState<number>(0);
    const [totalPrice, setToTalPrice] = useState<number>(0);
    if(typeof window !== 'undefined'){
        const orders = JSON.parse(localStorage.getItem(pharmacyName) || '{}');
        for(const key in orders){
            data.push(orders[key])
        }
        initialPrice = data.reduce(
            (accumulator: any, curEle: any) =>
            accumulator + curEle.price * curEle.quantity,
            0,
        );
        initialLength = data.reduce(
            (accumulator:number, curEle:any) => accumulator + curEle.quantity,0
        )
    }
    useEffect(() => {
        setToTalPrice(initialPrice)
        setQuantity(initialLength)
    }, [data.length])

    return (
        <div className="bg-[#f0f0f0] pt-[80px] flex justify-center">
            <div className="w-[400px] bg-white mb-[40px] shadow-lg rounded p-4">
                <div>
                    {data.map((el: any, index: any) => (
                        <ProductCart
                            key={index}
                            setTotalPrice={setToTalPrice}
                            totalPrice={totalPrice}
                            quantity={el.quantity}
                            setQuantity={setQuantity}
                            name={el.medicineName}
                            pathName={el.image}
                            price={el.price}
                        />
                    ))}
                </div>
                <div className="">
                    <div className="border-t-4 mt-4 border-[#f1f1f1] border-solid">
                        <h3 className="text-lg font-bold">
                            Thông tin của khách hàng
                        </h3>
                        <div className="flex flex-col">
                            <Input className="mt-4" placeholder="Họ và tên" />
                            <Input className="mt-4" placeholder="Số điện thoại" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border-t-4 mt-4 border-[#f1f1f1] border-solid">
                        <h3 className="text-lg font-bold">Chọn địa chỉ nhận hàng</h3>
                        <div className="flex flex-col">
                            <Input
                                className="mt-4"
                                placeholder="Nhập địa chỉ nhận hàng của bạn"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <span>Tổng số lượng: </span>
                        <span className="text-[#17c964] font-bold" suppressHydrationWarning>{quantity}</span>
                    </div>
                    <div className="mt-2 flex justify-between">
                        <span>Tổng tiền:</span>
                        <span className="font-bold text-[#17c964]" suppressHydrationWarning>
                            {totalPrice || 400000}
                        </span>
                    </div>
                </div>
                <div className="mt-4 text-center flex ">
                    <Button shadow className="flex-1" color="success">
                        ĐẶT HÀNG
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
