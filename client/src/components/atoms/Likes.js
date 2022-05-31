import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { _orange } from '../../styles/_colors';

export default function Likes(props) {
    return (
        <IconButton sx={{
            width: 50,
            height: 50,
        }} aria-label="likes" onClick={() => alert('TODO: send like request to the api') }>
            <FavoriteIcon sx={{
                width: 20,
                height: 20,
                color: _orange
            }}/>
        <h5 style={{ fontSize: 17, color: _orange }}>{props.likes}</h5>
        </IconButton>
    );
}