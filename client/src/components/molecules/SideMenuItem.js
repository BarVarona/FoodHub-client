import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { selected_gray, _orange } from '../../styles/_colors';
import { AppPagesIcons, AppPagesTitles } from '../../consts/pages.const';


const unSelectedItemStyle = { paddingTop: '10px', };
const selectedItemStyle = { ...unSelectedItemStyle, color: _orange, background: selected_gray };

export default function SideMenuItem(props) {
    return (
    <MenuItem sx={props.page === props.activePage ? selectedItemStyle : unSelectedItemStyle} onClick={() => { props.setActivePage(props.page); }}>
        <ListItemIcon sx={props.page === props.activePage ? { color: _orange } : {}}>{AppPagesIcons[props.page]}</ListItemIcon>
        <ListItemText sx={{ textAlign: 'left' }}>{AppPagesTitles[props.page]}</ListItemText>
    </MenuItem>
    )
}
