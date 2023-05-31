import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button, Input, Space } from 'antd';

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
        <div className="p-[36px]">
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia
                        className="p-[40px]"
                        component="img"
                        image={image}
                        alt={medicineName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                            {medicineName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Online giá rẻ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}đ/Hộp
                        </Typography>
                        <div className="flex justify-center">
                            <Button
                                onClick={(e) => onAddingCart && onAddingCart()}
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
}

export default MedicineCard;
