import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import { _orange } from '../../styles/_colors';

export default function Comments(props) {
    return (
        <IconButton sx={{
            width: 50,
            height: 50,
        }} aria-label="comments" onClick={() => alert('TODO: implement comments?')}>
            <ForumIcon sx={{
                width: 20,
                height: 20,
                color: _orange
            }}/>
        <h5 style={{ fontSize: 17, color: _orange }}>{props.comments.length}</h5>
        </IconButton>
    );
}