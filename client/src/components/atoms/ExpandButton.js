import IconButton from '@mui/material/IconButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { _orange } from '../../styles/_colors';

export default function ExpandButton(props) {
    return (
        <IconButton sx={{
            width: 35,
            height: 35,
            ...props.sx
        }} aria-label="expand" onClick={props.onClick}>
            <ArrowCircleRightIcon sx={{
                width: 25,
                height: 25,
                color: _orange
            }}/>
        </IconButton>
    );
}