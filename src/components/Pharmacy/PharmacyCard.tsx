import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

interface IPharmacyProps {
    name: string;
    longName: string;
    address: string;
    description?: string;
    image?: string;
}

function PharmacyCard({
    name,
    longName,
    address,
    description,
    image,
}: IPharmacyProps) {
    return (
        <Link href={`/pharmacy/${name}`}>
            <div className="mr-4">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            className="h-[300px]"
                            component="img"
                            image={image}
                            alt={name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {longName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Link>
    );
}

export default PharmacyCard;
