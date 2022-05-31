import LocationOnIcon from '@mui/icons-material/LocationOn';
import { _orange } from '../../styles/_colors';

export default function LocationIcon(props) {
    return (
        <LocationOnIcon sx={{
            width: 20,
            height: 20,
            color: _orange,
            marginTop: 'auto',
            marginBottom: 'auto',
            ...props.sx
        }} />
    );
}
