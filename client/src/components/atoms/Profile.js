import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { fontweight_middle } from '../../styles/_sizes';

export default function Profile(props) {
    return (
        <div style={{ display: 'flex', ...props.sx }}>
            <Avatar sx={{
                bgcolor: red[500],
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: 1,
                width: 30,
                height: 30,
            }} aria-label="profile"> {props.name[0]} </Avatar>
            <p style={{ fontSize: 15, fontWeight: fontweight_middle }}>{props.name}</p>
        </div>
    );
}
