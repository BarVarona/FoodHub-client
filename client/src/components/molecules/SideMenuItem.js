import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { selected_gray, _orange } from '../../styles/_colors';
import { AppPagesIcons, AppPagesTitles } from '../../consts/pages.const';


const unSelectedItemStyle = {  };
const selectedItemStyle = { ...unSelectedItemStyle, color: _orange, background: selected_gray };

export default function SideMenuItem(props) {
    return (
    <MenuItem sx={props.page === props.activePage ? selectedItemStyle : unSelectedItemStyle} onClick={() => { props.setActivePage(props.page); }}>
        <ListItemIcon sx={props.page === props.activePage ? { color: _orange } : {}}>{AppPagesIcons[props.page]}</ListItemIcon>
        <p style={{ fontSize: '1vw', margin: '1%'}} >{AppPagesTitles[props.page]}</p>
        {/* <ListItemText sx={{ textAlign: 'left' }}>{AppPagesTitles[props.page]}</ListItemText> */}
    </MenuItem>
    )
}
