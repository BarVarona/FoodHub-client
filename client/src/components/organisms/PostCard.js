import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { cards_radius, fontweight_middle } from '../../styles/_sizes';
import Likes from '../atoms/Likes';
import Profile from '../atoms/Profile';
import { UtilsService } from '../../services/utils.service';
import ProfileIcon from '../molecules/ProfileIcon';
import { api_url } from "../../consts/general.const";
import axios from 'axios';
import APIService from '../../services/api.service';
import CommentsModal from '../organisms/CommentsModal';

export default function PostCard(props) {
    const date = new Date(props.postDate);

    return (
        <div style={{ width: '100%' }}>
            <Card sx={{
                width: '95.5%',
                borderRadius: cards_radius,
                boxShadow: 6,
                paddingLeft: '2%',
                paddingTop: '1%',
            }}> 
                {/* profile and date */}
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex'  }}>
                        <ProfileIcon user={props.user} withName sx={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: 1,
                            width: 30,
                            height : 30,
                            fontSize: 15
                        }}/>
                    </div>
                    <p style={{ marginLeft: '2%', marginTop: 'auto', marginBottom: 'auto', }}>{UtilsService.formatAMPM(date)}</p>
                </div>
                    {/* content */}
                    <Typography width='80%' variant="body2" color="text.secondary" textAlign={'left'} fontSize={'1vw'}>
                    {props.content}
                    </Typography>
                <div style={{ display: 'flex', marginTop: '0%'}}>
                    <Likes likes={props.likes} onClick={async () => {
                        const newLikes = await APIService.put(`posts/${props._id}/like`);
                        return newLikes;
                    }}/>
                    <CommentsModal comments={props.comments} onClick={async (commentContent) => {
                        const updatedComments = await APIService.put(`posts/${props._id}/comment`, {
                            content: commentContent
                        });
                        return updatedComments;
                    }}/>
                </div>
                
            </Card>
        </div>
    );
}
