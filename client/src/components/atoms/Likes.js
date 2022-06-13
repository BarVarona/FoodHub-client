import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { _orange } from '../../styles/_colors';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'universal-cookie';

export default function Likes(props) {
    const [likes, setLikes] = useState(props.likes);

    const cookies = new Cookies();
    const userId = cookies.get('userId');
    const isLiked = likes.some(like => like === userId);    

    return (
        <IconButton sx={{
            width: 50,
            height: 50,
        }} aria-label="likes" onClick={async () => {
            const newLikes = await props.onClick();
            setLikes([...newLikes]);
        }}>
           {
                isLiked ?
                <FavoriteIcon sx={{
                    width: 20,
                    height: 20,
                    color: _orange,
                }}/> :
                <FavoriteBorderIcon sx={{
                    width: 20,
                    height: 20,
                    color: _orange
                }}/>
            }
        <h5 style={{ fontSize: '1.15vw', color: _orange }}>{likes.length}</h5>
        </IconButton>
    );
}