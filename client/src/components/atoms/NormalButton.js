import { Button } from '@mui/material';
import { selected_orange, _orange } from '../../styles/_colors';

export default function NormalButton(props) {
    return (
        <Button sx={{
            background: _orange,
            '&:hover': {
                backgroundColor: selected_orange,
            },
            ...props.sx
        }} variant="contained" onClick={props.onClick}>{props.text}</Button>
    )
}