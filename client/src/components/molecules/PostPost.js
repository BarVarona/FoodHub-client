import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../consts/routes.const";
import { selected_gray } from "../../styles/_colors";
import NormalButton from "../atoms/NormalButton";
import TextInputField from "../atoms/TextInputField";
import ProfileIcon from "./ProfileIcon";
import { api_url } from "../../consts/general.const";
import axios from 'axios';
import APIService from "../../services/api.service";
import { useEffect } from "react";
import Loading from "../atoms/Loading";

export default function PostPost(props) {

    const [postData, setPostData] = useState({ content: '' });
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // get user
            const res = await APIService.get('user');
            setUser(res);
        }
        fetchData();
    }, []);

    if (user === null) {
        return <Loading/>
    }

    return (
        <div style={{
            display: 'flex',
            width: '90%',
            marginLeft: '2%',
            marginRight: 'auto',
        }}>
            <ProfileIcon user={user} sx={{marginRight: 1}}/>
            <TextInputField label="Share your crave..." size="small" sx={{ width: '75%', background: selected_gray }} onChange={
                        element => { setPostData({...postData, content: element.target.value}) }}/>
            <NormalButton text="POST!" sx={{ width: '20%', borderRadius: 1, marginLeft: 'auto' }} onClick={
                async () => {
                    const res = await APIService.post('posts', {
                        content: postData.content,
                        postDate: new Date()
                    })

                    if (res === null) {
                        return;
                    }

                    alert('Post posted successfully!');
                    props.fetchData();
                }
            }/>
        </div>
    )
}
