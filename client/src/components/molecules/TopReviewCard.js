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
import ReviewModal from '../organisms/ReviewModal';
import ProfileIcon from './ProfileIcon';
import axios from 'axios';
import { useState, useEffect } from 'react';
import APIService from '../../services/api.service';
import CommentsModal from '../organisms/CommentsModal';

export default function TopReviewCard(props) {

    if (!props.user) {
        return null;
    }

    return (
        <div style={{ width: '100%', marginBottom: '1%'  }}>
            <Card sx={{ width: '100%', display: "flex", boxShadow: 2 }}>
                <CardContent sx={{ display: 'flex', width: '100%' }}>
                    <ProfileIcon user={props.user} sx={{
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
                                fontSize: '1.25vw',
                                fontWeight: fontweight_middle,
                                marginBottom: 0,
                                marginTop: '35%',
                                textAlign: 'left'
                            }}>{props.user.firstName} {props.user.lastName}</p>
                            <p style={{
                                marginTop: 0,
                                textAlign: 'left',
                                fontSize: '0.9vw',
                                width: '100%'
                            }}>{props.restaurantName}</p>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                height: 20,
                                color: _orange,
                            }}>
                                <Likes likes={props.likes} onClick={async () => {
                                    const newLikes = await APIService.put(`reviews/${props._id}/like`);
                                    return newLikes;
                                }}/>
                                <CommentsModal comments={props.comments}/>
                            </div>
                        </div>
                        <div style={{ marginTop: '15%' }}>
                            <Rating name="read-only" value={props.totalRating} readOnly />
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
