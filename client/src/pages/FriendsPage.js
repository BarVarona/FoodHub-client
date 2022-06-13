import { List, ListItem } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { api_url } from "../consts/general.const";
import axios from 'axios';
import ProfileIcon from "../components/molecules/ProfileIcon";
import { selected_gray } from "../styles/_colors";
import APIService from "../services/api.service";
import Loading from "../components/atoms/Loading";

export default function FriendsPage(props) {

    const [ friends, setFriends ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await APIService.get('user/friends');
            setFriends(res);
        }
 
        fetchData();
    }, []);

    if (friends === null) {
        return <Loading/>
    }

    return (
        <div style={{
            display: 'flex',
            // flexDirection: 'column',
            width: '100%',
        }}>
            <div style={{
                width: '50%'
            }}>
            <p style={{
                textAlign: 'left',
                marginLeft: '2%',
                fontSize: '1.2vw'
            }}>Following:</p>
            <List
                sx={{
                    width: '60%',
                    // marginTop: '1%',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 600,
                    '& ul': { padding: 0 },
                }}
            >
                {
                !friends.following ? <Loading/> :
                friends.following.map((user, index) => {
                    return (
                        <div key={`friend-${index}`} style={{margin: '2%'}}>
                            <ListItem sx={{
                                boxShadow: '1',
                                width: '100%',
                            }}>
                                <ProfileIcon
                                    user={user}
                                    withName
                                    sx={{
                                        marginTop: 'auto',
                                        marginBottom: 'auto',
                                        marginRight: 1,
                                        width: 50,
                                        height : 50,
                                        fontSize: 25,
                                    }}
                                />
                            </ListItem>
                        </div>
                    )
                })}
            </List>
            </div>
            <div style={{
                width: '50%'
            }}>
            <p style={{
                textAlign: 'left',
                marginLeft: '2%',
                fontSize: '1.2vw'
            }}>Followers:</p>
            <List
                sx={{
                    width: '60%',
                    // marginTop: '1%',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 600,
                    '& ul': { padding: 0 },
                }}
            >
                {
                !friends.followers ? <Loading/> :
                friends.followers.map((user, index) => {
                    return (
                        <div key={`friend-${index}`} style={{margin: '2%'}}>
                            <ListItem sx={{
                                boxShadow: '1',
                                width: '100%',
                            }}>
                                <ProfileIcon
                                    user={user}
                                    withName
                                    sx={{
                                        marginTop: 'auto',
                                        marginBottom: 'auto',
                                        marginRight: 1,
                                        width: 50,
                                        height : 50,
                                        fontSize: 25,
                                    }}
                                />
                            </ListItem>
                        </div>
                    )
                })}
            </List>
            </div>
        </div>
    );
}
