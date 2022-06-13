import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { selected_gray, _orange } from '../../styles/_colors';
import { AppPagesIcons, AppPagesTitles } from '../../consts/pages.const';


const unSelectedItemStyle = {
    paddingLeft: '1%',
    paddingRight: '1%',
    paddingTop: 0,
    paddingBottom: 0,
};
const selectedItemStyle = {
    ...unSelectedItemStyle,
    color: _orange,
    borderBottom: '3px solid ' + _orange,
};

export default function TopMenuItem(props) {
    return (
    <MenuItem sx={props.topMenuOption === props.option || props.selected ? selectedItemStyle : unSelectedItemStyle} onClick={() => { props.setTopMenuOption(props.option); }}>
        <p style={{ fontSize: '1vw'}}>{props.text}</p>
    </MenuItem>
    )
}
