import ProductCart from "~/components/ProductCart"
import { Button, Input } from "@nextui-org/react";
import {useState} from 'react'
interface dataType {
    name: string,
    pathName: string,
    price: number
    quantity: number
}

const Cart = () => {
    let data:dataType[] = [
        {
            name: 'Viên sủi Vitamin C Cali USA giúp tăng đề kháng, giảm mệt mỏi',
            pathName: 'https://cdn.tgdd.vn/Products/Images/11478/299279/vien-sui-vitamin-c-caliusa-tuyp-10-vien-thumb-1-1-200x200.jpg',
            price: 49000,
            quantity: 1,

        },
        {
            name: 'Fexophar 60mg trị viêm mũi dị ứng, dị ứng da, nổi mề đay',
            pathName: 'https://cdn.tgdd.vn/Products/Images/10036/225727/fexophar-60mg-h-50vien-thumb-1-1-200x200.jpg',
            price: 99500,
            quantity: 1,
        },
        {
            name: 'Pharmekal Spathion White Skin làm trắng da, giảm nám',
            pathName: 'https://cdn.tgdd.vn/Products/Images/7004/130262/vien-uong-spathion-30-vien-1-200x200.jpg',
            price: 590000,
            quantity: 1,
        },

    ]
    const initialPrice = data.reduce((accumulator,curEle) => accumulator + curEle.price * curEle.quantity, 0)
    console.log(initialPrice)
    const [quantity,setQuantity] = useState<number>(data.length)
    const [totalPrice, setToTalPrice] = useState<number>(initialPrice)
    return (
        <div className="bg-[#f0f0f0] pt-[80px] flex justify-center">
            <div className="w-[400px] bg-white mb-[40px] shadow-lg rounded p-4">
                <div>
                    {data.map((el,index) => (<ProductCart key = {index} setTotalPrice={setToTalPrice} totalPrice = {totalPrice} quantity = {el.quantity} setQuantity = {setQuantity} name={el.name} pathName={el.pathName} price = {el.price}/>))}
                </div>
                <div className="">
                    <div className="border-t-4 mt-4 border-[#f1f1f1] border-solid">
                        <h3 className="text-lg font-bold">Thông tin của khách hàng</h3>
                        <div className="flex flex-col">
                            <Input className="mt-4" placeholder="Họ và tên"/>
                            <Input className="mt-4" placeholder="Số điện thoại"/>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border-t-4 mt-4 border-[#f1f1f1] border-solid">
                        <h3 className="text-lg font-bold">Chọn địa chỉ nhận hàng</h3>
                        <div className="flex flex-col">
                            <Input className="mt-4" placeholder="Nhập địa chỉ nhận hàng của bạn"/>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div>
                        <span>Tổng số lượng: </span>
                        <span>{quantity}</span>
                    </div>
                    <div className="mt-2 flex">
                        <span>Tổng tiền</span>
                        <span className="text-[#17c964]">{totalPrice}</span>
                    </div>
                </div>
                <div className="mt-4 text-center flex ">
                    <Button shadow  className="flex-1" color="success">ĐẶT HÀNG</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart