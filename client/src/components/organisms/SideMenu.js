import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import { AppPages, AppPagesIcons } from '../../consts/pages.const';
import SideMenuItem from '../molecules/SideMenuItem';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from 'universal-cookie';

export default function SideMenu(props) {
    return (
        <Paper sx={{
          minHeight: '55vw',
        }}>
          <MenuList sx={{height: '100%'}}>
            {Object.entries(AppPages).map(([key, value]) => {
              if (key === AppPages.PROFILE) return null;
              return <SideMenuItem key={key} activePage={props.activePage} page={value} setActivePage={props.setActivePage}/>
            })}
            {/* logout */}
            <MenuItem sx={{marginTop: '10%'}} onClick={() => {
              const cookies = new Cookies();
              cookies.remove("jwtToken");
              cookies.remove("userId");
              window.location.replace('/login');
            }}>
              <ListItemIcon>{<LogoutIcon fontSize="small"/>}</ListItemIcon>
              <p style={{ fontSize: '1.1vw'}}>Logout</p>
            </MenuItem>
          </MenuList>
        </Paper>
      );
}
