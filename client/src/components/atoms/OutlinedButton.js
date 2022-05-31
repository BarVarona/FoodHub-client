import { Button } from '@mui/material';
import { selected_orange, _orange } from '../../styles/_colors';

export default function OutlinedButton(props) {
    return (
        <Button sx={{
            color: _orange,
            borderColor: _orange,
            '&:hover': {
                color: selected_orange,
                borderColor: selected_orange,
            },
            ...props.sx
        }} variant="outlined" onClick={props.onClick}>{props.text}</Button>
    )
}