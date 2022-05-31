import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { selected_gray } from "../../styles/_colors";
import NormalButton from "../atoms/NormalButton";
import TextInputField from "../atoms/TextInputField";
import ProfileIcon from "./ProfileIcon";

export default function PostPost(props) {

    const [postData, setPostData] = useState({ content: '' });

    return (
        <div style={{
            display: 'flex',
            width: '90%',
            marginLeft: '2%',
            marginRight: 'auto',
        }}>
            <ProfileIcon profileName="test" profileId="2321" sx={{marginRight: 1}}/>
            <TextInputField label="Share your crave..." size="small" sx={{ width: '75%', background: selected_gray }} onChange={
                        element => { setPostData({...postData, content: element.target.value}) }}/>
            <NormalButton text="POST!" sx={{ width: '20%', borderRadius: 1, marginLeft: 'auto' }}
            />
        </div>
    )
}
