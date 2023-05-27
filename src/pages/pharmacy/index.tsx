import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
const Pharmacy = () => {
    return (
        <div className="pt-[100px] mb-12 flex flex-col items-center">
            <div>
                <h1 className="font-bold text-lg">Danh sách các nhà thuốc</h1>
            </div>
            <div className="flex items-stretch mt-4">
                <Link href="/pharmacy/long-chau">
                    <div className="mr-4">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    className="h-[300px]"
                                    component="img"
                                    image="https://bizweb.dktcdn.net/100/324/196/files/long-chau-399x266.jpg?v=1571028848658"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Nhà thuốc Long Châu
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Nhà thuốc FPT Long Châu là chuỗi nhà thuốc
                                        tây lớn nhất Việt Nam, thành viên tập đoàn
                                        FPT, chuyên thuốc theo đơn, thực phẩm chức
                                        năng, dược mỹ phẩm, ...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Link>
                <Link href="/pharmacy/pharmacity">
                    <div className="mr-4">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    className="h-[300px]"
                                    component="img"
                                    image="https://www.pharmacity.vn/images/thumbnail-seo.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Nhà thuốc Pharmacity
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Công ty Cổ phần Dược phẩm Pharmacity cung cấp
                                        sản phẩm điều trị bệnh, chăm sóc sức khỏe uy
                                        tín qua nhà thuốc online và hệ thống hiệu
                                        thuốc Pharmacity toàn ...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Link>
                <Link href="/pharmacy/an-khang">
                    <div className="mr-4">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    className="h-[300px]"
                                    component="img"
                                    image="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Nha-Thuoc-An-Khang-V-Gr-We.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Nhà thuốc An Khang
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Nhà thuốc An Khang chuyên bán lẻ thuốc, dược
                                        phẩm, thực phẩm chức năng, thiết bị y tế;
                                        Đồng thời cung cấp thông tin hữu ích về cách
                                        phòng trị bệnh, ...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default Pharmacy;
