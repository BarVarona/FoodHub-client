import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DateCard from '../atoms/DateCard';
import { cards_radius, fontweight_middle, recipeCardImg_height } from '../../styles/_sizes';
import Likes from '../atoms/Likes';
import Profile from '../atoms/Profile';
import RecipeModal from './RecipeModal';
import ProfileIcon from '../molecules/ProfileIcon';
import { api_url } from "../../consts/general.const";
import axios from 'axios';
import APIService from '../../services/api.service';
import CommentsModal from '../organisms/CommentsModal';

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
                    image={`${api_url}general/image?imageName=${props.images[0]}`}
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
                <h2 style={{ textAlign: 'center' }}>{props.dishName}</h2>
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
                    {props.generalDesciption+'\nIngredients:\n'}
                    {props.ingredients.map(ingredient=>`- ${ingredient}`).join('\n') + '\n\nInstructions:\n'}
                    {props.instructions}
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
                    <Likes likes={props.likes} onClick={async () => {
                        const newLikes = await APIService.put(`recipes/${props._id}/like`);
                        return newLikes;
                    }}/>
                    <CommentsModal comments={props.comments} onClick={async (commentContent) => {
                        const updatedComments = await APIService.put(`recipes/${props._id}/comment`, {
                            content: commentContent
                        });
                        return updatedComments;
                    }}/>
                    
                    <div style={{ display: 'flex', marginLeft: 'auto', marginRight: '3%'  }}>
                        <ProfileIcon user={props.user} withName={true} sx={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: 1,
                        }}/>
                    </div>
                </div>
                </CardContent>
            </Card>
        </div>
    );
}