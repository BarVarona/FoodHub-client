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
import LocationIcon from '../atoms/LocationIcon';
import ReviewModal from '../organisms/ReviewModal';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import ProfileIcon from './ProfileIcon';


export default function TopReviewCard(props) {
    return (
        <div style={{ width: '100%', marginBottom: '1%'  }}>
            <Card sx={{ width: '100%', display: "flex", boxShadow: 2 }}>
                <CardContent sx={{ display: 'flex', width: '100%' }}>
                    <ProfileIcon profileName="TN" profileId="000" sx={{
                        width: 65,
                        height: 65,
                        fontSize: 30,
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginRight: 1,
                    }}/>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', padingRight: '20%' }}>
                            <p style={{
                                fontSize: 18,
                                fontWeight: fontweight_middle,
                                marginBottom: 0,
                                marginTop: '35%',
                                textAlign: 'left'
                            }}>Test</p>
                            <p style={{
                                marginTop: 0,
                                textAlign: 'left',
                                fontSize: 12,
                                width: '100%'
                            }}>{props.restaurantName}</p>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                height: 20,
                                color: _orange,
                            }}>
                                <Likes likes={props.likes.length}/>
                                <Comments comments={props.comments}/>
                            </div>
                        </div>
                        <div style={{ marginTop: '15%' }}>
                            <Rating name="read-only" value={props.rating} readOnly />
                                <div style={{ display: 'flex', marginTop: '10%' }}>
                                    <ReviewModal {...props}/>
                                </div>
                        </div>
                    </div>
                
                </CardContent>
            </Card>
        </div>
    );
}
