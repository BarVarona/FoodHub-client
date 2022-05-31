import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import { AppPages } from '../../consts/pages.const';
import SideMenuItem from '../molecules/SideMenuItem';

export default function SideMenu(props) {
    return (
        <Paper>
          <MenuList>
            {Object.entries(AppPages).map(([key, value]) => {
              if (key === AppPages.PROFILE) return null;
              return <SideMenuItem key={key} activePage={props.activePage} page={value} setActivePage={props.setActivePage}/>
            })}
          </MenuList>
        </Paper>
      );
}
