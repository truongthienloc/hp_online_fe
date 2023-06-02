import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button, Input, Space } from 'antd';
import {motion} from 'framer-motion'
export interface IMedicineCardProps {
    pharmacyName: string;
    medicineName: string;
    price: number;
    quantity: number;
    image: string;
    description: string;
    onAddingCart?: () => void;
}

function MedicineCard({
    medicineName,
    price,
    quantity,
    image,
    description,
    onAddingCart,
}: IMedicineCardProps) {
    /**
     * TODO: render quantity (số lượng) và description cho medicine card
     */
    return (
        <motion.div
            initial = {{opacity:0, scale:0}}
            animate = {{opacity:1, scale: 1}}
            transition={{duration: 1, ease: 'easeOut'}}
        >
            <div className="p-[20px]">
            <Card className='h-[400px]' sx={{ width: 300 }}>
                <CardActionArea className='h-full'>
                    <CardMedia
                        className="p-[20px] h-[200px]"
                        component="img"
                        image={image}
                        alt={medicineName}
                        height='200'
                    />
                    <CardContent className='h-[50%]'>
                        <Typography gutterBottom variant="body1" component="div">
                            {medicineName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Online giá rẻ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}đ/Hộp
                        </Typography>
                        <div className="mt-[48px] flex justify-center ">
                            <Button
                                onClick={(e) => onAddingCart && onAddingCart()}
                                className=""
                            >
                                Thêm vào giỏ hàng
                            </Button>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        </motion.div>
    );
}

export default MedicineCard;
