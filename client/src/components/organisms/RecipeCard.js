import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DateCard from '../atoms/DateCard';
import { cards_radius, fontweight_middle, recipeCardImg_height } from '../../styles/_sizes';
import Likes from '../atoms/Likes';
import Comments from '../molecules/Comments';
import Profile from '../atoms/Profile';
import RecipeModal from './RecipeModal';
import ProfileIcon from '../molecules/ProfileIcon';

export default function RecipeCard(props) {
    return (
        <div style={{
            width: '100%'
        }}>
            {/* image */}
            <div style={{borderRadius: '30px', width: '100%'}}>
                <CardMedia
                    component="img"
                    height={recipeCardImg_height}
                    image={props.image}
                    sx={{ borderRadius: cards_radius }}
                />
            </div>
            <Card sx={{
                width: '97.5%',
                borderRadius: cards_radius,
                boxShadow: 6,
                position: 'relative',
                transform: 'translate(1.5%, -25%)'
            }}>
                <CardContent sx={{
                    display: 'grid',
                    gridTemplateRows: '1fr 4fr 1fr',
                    height: 320
                }}>
                {/* name */}
                <h2 style={{ textAlign: 'center' }}>{props.name}</h2>
                <div style={{ display: 'flex' }}>
                    <div style={{width: '75%'}}>
                    {/* Recipe text */}
                    <Typography
                        width='80%' height={200}
                        variant="body2" color="text.secondary" textAlign={'left'}
                    sx={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                    }}
                    >
                    {props.content}
                    </Typography>
                    </div>
                    <div style={{width: '25%', display: 'flex', flexDirection: 'column'}}>
                        <DateCard date={props.date} sx={{
                            marginLeft: 'auto',
                            marginRight: '15%',
                        }}/>
                        <RecipeModal {...props}/>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '2%'}}>
                    <Likes likes={props.likes.length}/>
                    <Comments comments={props.comments}/>
                    
                    <div style={{ display: 'flex', marginLeft: 'auto', marginRight: '3%'  }}>
                        <ProfileIcon profileName="Rick Sanchez" profileId="2323" sx={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: 1,
                        }}/>
                        <p style={{ fontSize: 15, fontWeight: fontweight_middle }}>{"Rick Sanchez"}</p>
                    </div>
                </div>
                </CardContent>
            </Card>
        </div>
    );
}