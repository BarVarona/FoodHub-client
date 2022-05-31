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
import Comments from '../molecules/Comments';
import Profile from '../atoms/Profile';
import ReviewModal from './ReviewModal';
import LocationIcon from '../atoms/LocationIcon';
import ProfileIcon from '../molecules/ProfileIcon';


export default function ReviewCard(props) {

    return (
        <div style={{
            width: '100%'
        }}>
            <Card sx={{
                width: '97.5%',
                height: reviewCard_height,
                display: "flex",
                flexDirection: "row",
                borderRadius: cards_radius,
                boxShadow: 6,
            }}>
                {/* image */}
                <div style={{borderRadius: '30px', width: '40%'}}>
                    <CardMedia
                        component="img"
                        height={reviewCard_height}
                        image={props.images[0]}
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
                    <DateCard date={ props.date } sx={{ marginRight: 3 }}/>
                    {/* restaurant info */}
                    <div>
                        <h3 style={{ margin: 1, textAlign: 'left' }}>{props.restaurantName}</h3>
                        <div style={{display: 'flex'}}>
                            <LocationIcon sx={{ marginRight: 0.5 }} />
                            <p style={{ margin: 1, textAlign: 'left', fontSize: fontsize_12 }}>Ramat Hayal, Tel Aviv</p>
                        </div>
                        
                        <Rating sx={{ display: 'flex'}} name="read-only" value={props.rating} readOnly />
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
                    >{props.content}</Typography>
                </div>
                <div style={{ display: 'flex' }}>
                    {/* profile */}
                    <div style={{ display: 'flex', marginTop: '2%'  }}>
                        <ProfileIcon profileName="Rick Sanchez" profileId="2323" sx={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: 1,
                            width: 35,
                            height: 35
                        }}/>
                        <p style={{ fontSize: 15, fontWeight: fontweight_middle }}>{"Rick Sanchez"}</p>
                    </div>
                    <ReviewModal {...props}/>
                </div>
                <div style={{
                    display: 'flex',
                    marginLeft: 'auto',
                    height: 20,
                    color: _orange,
                }}>
                    <Likes likes={props.likes.length}/>
                    <Comments comments={props.comments}/>
                </div>
                </CardContent>
            </Card>
        </div>
    );
}
