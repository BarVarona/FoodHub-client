import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { _orange } from '../../styles/_colors';
import { deepOrange } from '@mui/material/colors';
import { AppPages, AppPagesTopMenu } from '../../consts/pages.const';
import TopMenuItem from '../molecules/TopMenuItem';
import ProfileIcon from '../molecules/ProfileIcon';

export default function TopMenu(props) {
    return (
    <Box
        sx={{
            boxShadow: 1,
            display: 'flex',
            '& > :not(style)': { m: 1 },
            height: 58
        }}
    >
        {
            AppPagesTopMenu[props.activePage].map((title, index) => {
                const selected = props.topMenuOption < AppPagesTopMenu.length - 1;
                return (
                    <TopMenuItem
                        topMenuOption={props.topMenuOption}
                        setTopMenuOption={props.setTopMenuOption}
                        option={index}
                        text={title}
                        selected={selected}
                        key={'top-menu-' + index}
                    />
                )
            })
        }
        <div style={{ marginLeft: 'auto', marginRight: '2%'}}>
            <ProfileIcon profileName="Test" profileId="0"/>
        </div>
    </Box>
 )
}
