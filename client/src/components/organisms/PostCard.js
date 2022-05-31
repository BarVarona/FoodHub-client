import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { cards_radius, fontweight_middle } from '../../styles/_sizes';
import Likes from '../atoms/Likes';
import Comments from '../molecules/Comments';
import Profile from '../atoms/Profile';
import { UtilsService } from '../../services/utils.service';
import ProfileIcon from '../molecules/ProfileIcon';

export default function PostCard(props) {
    const date = new Date(props.date);

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
                        <ProfileIcon profileName="Rick Sanchez" profileId="2323" sx={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: 1,
                            width: 30,
                            height : 30,
                            fontSize: 15
                        }}/>
                    <p style={{ fontSize: 14, fontWeight: fontweight_middle }}>{"Rick Sanchez"}</p>
                    </div>
                    <p style={{ marginLeft: '2%', marginTop: 'auto', marginBottom: 'auto', }}>{UtilsService.formatAMPM(date)}</p>
                </div>
                    {/* content */}
                    <Typography width='80%' variant="body2" color="text.secondary" textAlign={'left'}>
                    {props.content}
                    </Typography>
                <div style={{ display: 'flex', marginTop: '0%'}}>
                    <Likes likes={props.likes.length}/>
                    <Comments comments={props.comments}/>
                </div>
                
            </Card>
        </div>
    );
}
