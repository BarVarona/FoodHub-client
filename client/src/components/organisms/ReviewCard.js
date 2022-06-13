import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { _orange } from '../../styles/_colors';
import Rating from '@mui/material/Rating';
import DateCard from '../atoms/DateCard';
import { fontsize_12, reviewCard_height, cards_radius, fontweight_middle } from '../../styles/_sizes';
import Likes from '../atoms/Likes';
import Profile from '../atoms/Profile';
import ReviewModal from './ReviewModal';
import LocationIcon from '../atoms/LocationIcon';
import ProfileIcon from '../molecules/ProfileIcon';
import { api_url } from "../../consts/general.const";
import APIService from '../../services/api.service';
import CommentsModal from '../organisms/CommentsModal';

export default function ReviewCard(props) {

    return (
        <div style={{
            width: '100%'
        }}>
            <Card sx={{
                width: '97.5%',
                height: 246,
                display: "flex",
                flexDirection: "row",
                borderRadius: cards_radius,
                boxShadow: 6,
            }}>
                {/* image */}
                <div style={{borderRadius: '30px', width: '40%'}}>
                    <CardMedia
                        component="img"
                        height={245}
                        image={`${api_url}general/image?imageName=${props.images[0]}`}
                        sx={{ borderRadius: cards_radius }}
                    />
                </div>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '60%'
                }}>
                <div style={{ display: 'flex', margin: 10 }}>
                    {/* date */}
                    <DateCard date={ props.dateOfVisit } sx={{ marginRight: 3 }}/>
                    {/* restaurant info */}
                    <div>
                        <h3 style={{ margin: 1, textAlign: 'left', fontSize: '1.3vw', }}>{props.restaurantName}</h3>
                        <div style={{display: 'flex'}}>
                            <LocationIcon sx={{ marginRight: 0.5 }} />
                            <p style={{ margin: 1, textAlign: 'left', fontSize: '1vw' }}>{props.location}</p>
                        </div>
                        
                        <Rating sx={{ display: 'flex'}} name="read-only" value={props.totalRating} readOnly />
                    </div>
                </div>
                <div>
                    {/* review text */}
                    <Typography maxWidth={300} width='46%' height={20} variant="body2" color="text.secondary" textAlign={'left'}
                    sx={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap'
                    }}
                    >{props.totalOverview}</Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    {/* profile */}
                    <div style={{ display: 'flex', marginTop: '2%'  }}>
                        <ProfileIcon user={props.user} withName sx={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: 1,
                            width: 35,
                            height: 35
                        }}/>
                    </div>
                    <ReviewModal {...props}/>
                </div>
                <div style={{
                    display: 'flex',
                    marginLeft: 'auto',
                    height: 20,
                    color: _orange,
                }}>
                    <Likes likes={props.likes} onClick={async () => {
                        const newLikes = await APIService.put(`reviews/${props._id}/like`);
                        return newLikes;
                    }}/>
                    <CommentsModal comments={props.comments} onClick={async (commentContent) => {
                        const updatedComments = await APIService.put(`reviews/${props._id}/comment`, {
                            content: commentContent
                        });
                        return updatedComments;
                    }}/>
                </div>
                </CardContent>
            </Card>
        </div>
    );
}
