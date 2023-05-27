import ProductCart from "~/components/ProductCart"
import { Button, Input } from "@nextui-org/react";
import {useState, useEffect} from 'react'


let data:any = []

const Cart = () => {


    const initialPrice = data.reduce((accumulator:any,curEle:any) => accumulator + curEle.price * curEle.quantity, 0)
    console.log(initialPrice)
    const [quantity,setQuantity] = useState<number>(data.length)
    const [totalPrice, setToTalPrice] = useState<number>(initialPrice)
    return (
        <div className="bg-[#f0f0f0] pt-[80px] flex justify-center">
            <div className="w-[400px] bg-white mb-[40px] shadow-lg rounded p-4">
                <div>
                    {data.map((el:any,index:any) => (<ProductCart key = {index} setTotalPrice={setToTalPrice} totalPrice = {totalPrice} quantity = {el.quantity} setQuantity = {setQuantity} name={el.name} pathName={el.pathName} price = {el.price}/>))}
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
                    <div className="flex justify-between">
                        <span>Tổng số lượng: </span>
                        <span className="text-[#17c964] font-bold">{quantity}</span>
                    </div>
                    <div className="mt-2 flex justify-between">
                        <span>Tổng tiền:</span>
                        <span className="font-bold text-[#17c964]">{totalPrice}</span>
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