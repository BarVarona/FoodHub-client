import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";


export default function ProfileIcon(props) {
    const iconText = props.profileName[0] + props.profileName[1];

    return (
        <Avatar className='pointer' sx={{ bgcolor: red[500], ...props.sx }}>{iconText}</Avatar>
    );
}
