import { Paper } from '@mui/material';
import { _orange } from '../../styles/_colors';
import { dateCard_height, dateCard_width, fontweight_middle } from '../../styles/_sizes';

export default function DateCard(props) {
    const date = new Date(props.date);
    const month = date?.toLocaleString('default', { month: 'short' });
    const day = date?.getDate();

    return (
        <Paper sx={{
            background: _orange,
            color: 'white',
            width: dateCard_width,
            height: dateCard_height,
            fontWeight: fontweight_middle,
            display: 'inline-block',
            lineHeight: 1.7,
            verticalAlign: 'middle',
            textAlign: 'center',
            whiteSpace: 'break-spaces',
            ...props.sx
        }}>{month}{'\n'}{day}</Paper>
    )
}
