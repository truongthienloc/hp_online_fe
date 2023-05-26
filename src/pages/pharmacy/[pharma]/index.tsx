import { Button, Input, Space } from 'antd';
import { useRouter } from 'next/router';
import {AiOutlineShoppingCart} from 'react-icons/ai'
const { Search } = Input;
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
const AnKhang = () => {
    const onSearch = (value: string) => console.log(value);
    const router = useRouter()
    const {pharma} = router.query
    let namePharma:string = ''
    switch (pharma) {
        case 'long-chau':
            namePharma = 'Long Châu'
            break;
        case 'pharmacity':
            namePharma = 'Pharmacity'
            break;
        default:
            namePharma = 'An Khang'
            break;
    }
    const notify = () => {
        toast.success("Bạn đã thêm sản phẩm giỏ hàng thành công")
    }
    return (
        <div className="pt-[50px] mb-[250px]  ">
            <div className={
                namePharma === 'Long Châu' ? `px-12 h-[150px] bg-[#17196c] flex items-center justify-between` : 
                namePharma === 'Pharmacity' ? `px-12 h-[150px] bg-[#0f61f7] flex items-center justify-between` :
                `px-[36px] h-[150px] bg-[#39b647] flex items-center justify-between`

            }>
                <div className="flex items-center">
                    <h1 className="text-white text-3xl font-bold">Nhà thuốc {namePharma}</h1>
                </div>
                <div>
                    <Search
                    placeholder="Nhập một loại thuốc bạn muốn tìm kiếm..."
                    allowClear
                    size="large"
                    onSearch={onSearch}
                    className='w-[500px]'
                    enterButton = 'Search'
                    />
                </div>
                <div className='flex cursor-pointer opacity-30 hover:opacity-100 duration-100 '>
                    <p className='text-lg text-white'>Giỏ hàng</p>
                    <AiOutlineShoppingCart className='ml-2 text-3xl text-white'/>
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                <div className='p-[36px]'>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        className='p-[40px]'
                        component="img"
                        image="https://cdn.tgdd.vn/Products/Images/7004/243292/glutathion-h-2lox15v-thumb01-600x600.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                            L-Cystin B6 làm đẹp da, tóc, móng
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Online giá rẻ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            91.800đ/Hộp
                        </Typography>
                        <div className='flex justify-center'>
                            <Button onClick = {notify} className='mt-4'>Thêm vào giỏ hàng</Button>
                        </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                <div className='p-[36px]'>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        className='p-[40px]'
                        component="img"
                        image="https://cdn.tgdd.vn/Products/Images/7004/229966/vien-uong-oribe-h-30vien-thumb-1-1-600x600.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                            L-Cystin B6 làm đẹp da, tóc, móng
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Online giá rẻ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            91.800đ/Hộp
                        </Typography>
                        <div className='flex justify-center'>
                            <Button onClick = {notify} className='mt-4'>Thêm vào giỏ hàng</Button>
                        </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                <div className='p-[36px]'>
                <Link href ={`${pharma}/cart`}>
                    <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        className='p-[40px]'
                        component="img"
                        image="https://cdn.tgdd.vn/Products/Images/7004/197432/vien-uong-bo-toc-welhair-for-women-30-vien-thumb-1-2-600x600.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                            L-Cystin B6 làm đẹp da, tóc, móng
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Online giá rẻ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            91.800đ/Hộp
                        </Typography>
                        <div className='flex justify-center'>
                            <Button onClick = {notify} className='mt-4'>Thêm vào giỏ hàng</Button>
                        </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
                </div>
                <div className='p-[36px]'>
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        className='p-[40px]'
                        component="img"
                        image="https://cdn.tgdd.vn/Products/Images/7004/247931/l-cystin-b6-h-60v-thumb-1-600x600.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                            L-Cystin B6 làm đẹp da, tóc, móng
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Online giá rẻ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            91.800đ/Hộp
                        </Typography>
                        <div className='flex justify-center'>
                            <Button onClick = {notify} className='mt-4'>Thêm vào giỏ hàng</Button>
                        </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
            </div>
            <ToastContainer theme='light' />
        </div>
    )
}
export default AnKhang