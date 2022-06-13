import { Avatar, List, ListItem, Paper } from "@mui/material";
import { red } from "@mui/material/colors";
import PostCard from "../components/organisms/PostCard";
import RecipeCard from "../components/organisms/RecipeCard";
import ReviewCard from "../components/organisms/ReviewCard";
import { mock_posts, mock_recipes, mock_reviews } from "../mock/mock";
import { selected_gray, selected_orange, _orange } from "../styles/_colors";
import ReceiptIcon from '@mui/icons-material/Receipt';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useState } from "react";
import { useEffect } from "react";
import { api_url } from "../consts/general.const";
import APIService from '../services/api.service';
import Loading from "../components/atoms/Loading";
import UploadFileButton from "../components/atoms/UploadFileButton";

export default function ProfilePage(props) {

    let profileId = props.profileId;

    const [ profile, setProfile ] = useState(null);
    const [ user, setUser ] = useState(null);

    const fetchData = async () => {
        let res;
        // get user
        res = await APIService.get('user');
        setUser(res);
        // get profile                
        res = await APIService.get(`user/${profileId}/profile`);
        setProfile(res);
    }
    
    useEffect(() => {
        setUser(null);
        setProfile(null);
        profileId = props.profileId;
        fetchData();
    }, [props.profileId]);

    if (profile === null || user === null) {
        return <Loading/>
    }

    const isUserPage =  user._id === profile._id;
    const isFollowing = user.Following.some(id => profile._id === id);
    const hasProfilePic = user.profilePicture && user.profilePicture.replace(/\s+/g, '') !== "";

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
            <div style={{
                display: 'flex',
                height: '20%',
                background: selected_gray,
            }}>
                <div style={{
                    display: 'flex',
                    width: '50%',
                    marginBottom: 'auto',
                    marginTop: 'auto',
                    marginLeft: '2%'
                }}>
                <div style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center'
                }}>
                    <Avatar 
                    src={hasProfilePic ? `${api_url}general/image?imageName=${profile.profilePicture}` : undefined}
                    sx={{
                        bgcolor: red[500],
                        width: 130,
                        height: 130,
                        fontSize: 60,
                        marginBottom: 1
                    }} aria-label="profile">{profile.firstName[0] + profile.lastName[0]}</Avatar>
                    {hasProfilePic || !isUserPage ? null : <UploadFileButton label="UPLOAD" setFile={async (file) => {
                        await APIService.uploadImage('user/image', file);
                        window.location.reload();
                    }}/>}
                </div>
                    <h2 style={{ width: '30%', paddingTop: '2%', fontSize: '2vw'}}>{profile.firstName} {profile.lastName}</h2>
                    
                </div>
                <div style={{ display: 'flex', width: '50%'}}>
                    <div style={{
                        display: 'flex',
                        width: '75%',
                        height: '4.5vw',
                        marginTop: 'auto',
                        marginBottom: '1%'
                    }}>
                        <Paper sx={{
                            width: '25%',
                            fontSize: '1vw',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <p style={{ fontWeight: 'bold', marginBottom: '0'}}>{profile.Followers.length}</p>
                            <p style={{ marginTop: '0'}}>Followers</p>
                        </Paper>
                        <Paper sx={{
                            width: '25%',
                            fontSize: '1vw',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <p style={{ fontWeight: 'bold', marginBottom: '0',}}>{profile.Following.length}</p>
                            <p style={{ marginTop: '0',}}>Following</p>
                        </Paper>
                        {
                            isUserPage ? 
                            <Paper sx={{
                                width: '50%',
                                background: selected_orange,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: 'white',
                                fontSize: '1.5vw'
                            }}>My Profile</Paper> :

                            <Paper className='pointer' sx={{
                                width: '50%',
                                background: _orange,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: 'white',
                                fontSize: '1.5vw'
                            }} onClick={
                                async () => {
                                    if (isFollowing) {
                                        const res = await APIService.put(`user/${profileId}/unfollow`)
                                    }
                                    else {
                                        const res = await APIService.put(`user/${profileId}/follow`)
                                    }    
                                    fetchData();
                                }
                            }> { isFollowing ? 'Unfollow' : '+Follow'} </Paper>
                        }
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', height: '66%', paddingLeft: '3%' }}>
                <div style={{ width: '50%' }}>
                    <p style={{ textAlign: 'left', fontSize: '1.1vw' }}>{profile.firstName}'s most recent activity</p>
                     
                    <List
                        sx={{
                            width: '100%',
                            marginTop: '1%',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 570,
                            '& ul': { padding: 0 },
                            // boxShadow: '3'
                        }}
                    >
                    {
                        !profile.timeline ? <Loading/> :
                        profile.timeline.map((element, index) => {
                            return (
                                <ListItem key={`recent-` + index}>
                                    {
                                        element.type === "Post" ?
                                        <PostCard {...element}/> :
                                        element.type === "Review" ?
                                        <ReviewCard {...element}/> :
                                        <RecipeCard {...element}/>
                                    }
                                    
                                </ListItem>
                            );
                        })
                    }
                    {/* Bottom Padding */}
                    <ListItem><br/><br/><br/><br/></ListItem>
                    <ListItem><br/><br/><br/><br/></ListItem>
                    <ListItem><br/><br/><br/><br/></ListItem>
                    </List>
                </div>
                <div style={{ width: '50%' }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%',
                            marginLeft: 'auto',
                            marginRight: '8%',
                        }}>
                            <p style={{ textAlign: 'left', fontSize: '1vw'}}>{profile.firstName}'s stats</p>
                            <Paper sx={{
                                background: selected_gray,
                                boxShadow: 2,
                                display: "flex",
                                padding: '5%',
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginLeft:'10%',
                                    width: '50%',
                                }}>
                                    <p style={{ marginBottom: '10%', fontSize: '1.1vw'}}>{profile.reviewsCount}{'\n'}Reviews</p>
                                    <ReceiptIcon/>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginLeft: 'auto',
                                    marginRight: '10%',
                                    width: '50%'
                                }}>
                                    <p style={{ marginBottom: '10%', fontSize: '1.1vw'}}>{profile.recipesCount}{'\n'}Recipes</p>
                                    <FastfoodIcon/>
                                </div>
                            </Paper>
                        </div>
                </div>
            </div>
        </div>
    );
}
