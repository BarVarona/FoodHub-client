import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { useEffect } from "react";
import { goToProfilePage } from "../../pages/GeneralPage";
import { api_url } from "../../consts/general.const";
import axios from 'axios';
import { fontweight_middle } from "../../styles/_sizes";

export default function ProfileIcon(props) {
    const user = props.user;

    if (!user) {
        return <Avatar sx= {{...props.sx}}></Avatar>;
    }

    const iconText = user.firstName[0] + user.lastName[0];
    const hasProfilePic = user.profilePicture && user.profilePicture.replace(/\s+/g, '') !== "";

    return (
        <div style={{ marginTop: 'auto', marginBottom: 'auto', display: 'flex' }}>
        <Avatar src={hasProfilePic ? `${api_url}general/image?imageName=${user.profilePicture}` : undefined} className='pointer' sx={{ bgcolor: red[500], ...props.sx }} onClick={() => {
            goToProfilePage(user._id)
        }}>{iconText}</Avatar>
        { props.withName ? <p style={{ fontSize: 15, fontWeight: fontweight_middle }}>{user.firstName} {user.lastName}</p> : null}
        </div>
    );
}
