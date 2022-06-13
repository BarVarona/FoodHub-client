import { useState } from "react";
import { selected_gray } from "../../styles/_colors";
import NormalButton from "../atoms/NormalButton";
import TextInputField from "../atoms/TextInputField";
import ProfileIcon from "./ProfileIcon";
import APIService from "../../services/api.service";
import { useEffect } from "react";
import Loading from "../atoms/Loading";

export default function PostComment(props) {

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
            marginLeft: '2%',
            marginRight: 'auto',
        }}>
            <ProfileIcon user={user} sx={{marginRight: 1}}/>
            <TextInputField label="Share your thoughts..." size="small" sx={{ width: '75%', background: selected_gray }} onChange={
                        element => { setPostData({...postData, content: element.target.value}) }} value={postData.content}/>
            <NormalButton text="POST!" sx={{ width: '20%', borderRadius: 1, marginLeft: 'auto' }} onClick={ () => {
                props.onClick(postData.content);
                setPostData({ content: '' });
            }}/>
        </div>
    )
}
