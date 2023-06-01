import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
import {motion} from 'framer-motion'
export interface IPharmacyData {
    name: string;
    longName: string;
    address: string;
    description: string;
    avatar?: string;
}

function PharmacyCard({
    name,
    longName,
    address,
    description,
    avatar,
}: IPharmacyData) {
    return (
        <motion.div
            initial = {{opacity:0, x:200}}
            animate = {{opacity:1, x:0}}
            transition={{duration:1, ease:'easeOut'}}
        >
            <Link href={`/pharmacy/${name}`} >
            <div className="mr-4">
                <Card sx={{ maxWidth: 345 }} className='h-[100%]'>
                    <CardActionArea className='h-[100%]'>
                        <CardMedia
                            className="h-[300px]"
                            component="img"
                            image={avatar}
                            alt={name}
                        />
                        <CardContent className='h-[200px]'>
                            <Typography gutterBottom variant="h5" component="div">
                                {longName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description.length > 300 ? `${description.substring(0,261)}...` : description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Link>
        </motion.div>
    );
}

export default PharmacyCard;
