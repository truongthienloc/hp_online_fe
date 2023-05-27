import { Button, Input, Space } from 'antd';
import { useRouter } from 'next/router';
import { AiOutlineShoppingCart } from 'react-icons/ai';
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
    const router = useRouter();
    const { pharma } = router.query;
    let namePharma: string = '';
    interface dataType {
        name: string;
        pathName: string;
        price: number;
        quantity: number;
    }

    let data: dataType[] = [
        {
            name: 'Viên sủi Vitamin C Cali USA giúp tăng đề kháng, giảm mệt mỏi',
            pathName:
                'https://cdn.tgdd.vn/Products/Images/11478/299279/vien-sui-vitamin-c-caliusa-tuyp-10-vien-thumb-1-1-200x200.jpg',
            price: 49000,
            quantity: 1,
        },
        {
            name: 'Fexophar 60mg trị viêm mũi dị ứng, dị ứng da, nổi mề đay',
            pathName:
                'https://cdn.tgdd.vn/Products/Images/10036/225727/fexophar-60mg-h-50vien-thumb-1-1-200x200.jpg',
            price: 99500,
            quantity: 1,
        },
        {
            name: 'Pharmekal Spathion White Skin làm trắng da, giảm nám',
            pathName:
                'https://cdn.tgdd.vn/Products/Images/7004/130262/vien-uong-spathion-30-vien-1-200x200.jpg',
            price: 590000,
            quantity: 1,
        },
    ];
    switch (pharma) {
        case 'long-chau':
            namePharma = 'Long Châu';
            break;
        case 'pharmacity':
            namePharma = 'Pharmacity';
            break;
        default:
            namePharma = 'An Khang';
            break;
    }
    const notify = () => {
        toast.success('Bạn đã thêm sản phẩm giỏ hàng thành công');
    };

    return (
        <div className="pt-[50px] mb-[250px]  ">
            <div
                className={
                    namePharma === 'Long Châu'
                        ? `px-12 h-[150px] bg-[#17196c] flex items-center justify-between`
                        : namePharma === 'Pharmacity'
                        ? `px-12 h-[150px] bg-[#0f61f7] flex items-center justify-between`
                        : `px-[36px] h-[150px] bg-[#39b647] flex items-center justify-between`
                }
            >
                <div className="flex items-center">
                    <h1 className="text-white text-3xl font-bold">
                        Nhà thuốc {namePharma}
                    </h1>
                </div>
                <div>
                    <Search
                        placeholder="Nhập một loại thuốc bạn muốn tìm kiếm..."
                        allowClear
                        size="large"
                        onSearch={onSearch}
                        className="w-[500px]"
                        enterButton="Search"
                    />
                </div>
                <div className=" cursor-pointer opacity-30 hover:opacity-100 duration-100 ">
                    <Link className="flex" href={`${pharma}/cart`}>
                        <p className="text-lg text-white">Giỏ hàng</p>
                        <AiOutlineShoppingCart className="ml-2 text-3xl text-white" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {data.map((el, index) => {
                    return (
                        <div key={index} className="p-[36px]">
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        className="p-[40px]"
                                        component="img"
                                        image={el.pathName}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="body1"
                                            component="div"
                                        >
                                            {el.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Online giá rẻ
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {el.price}đ/Hộp
                                        </Typography>
                                        <div className="flex justify-center">
                                            <Button
                                                onClick={(e) => {
                                                    notify();
                                                }}
                                                className="mt-4"
                                            >
                                                Thêm vào giỏ hàng
                                            </Button>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    );
                })}
            </div>
            <ToastContainer theme="light" />
        </div>
    );
};
export default AnKhang;
