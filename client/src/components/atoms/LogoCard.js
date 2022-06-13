import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { logoCard_width, header_height, fontsize_20, fontweight_middle } from '../../styles/_sizes';
import { selected_gray, _orange } from '../../styles/_colors';


export default function LogoCard(props) {

    return (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: logoCard_width,
              height: header_height,
            },
            background: selected_gray
          }}
        >
          <Paper sx={{
              textAlign: 'center',
              height: header_height,
              lineHeight: `${header_height}px`,
              color: _orange,
              fontWeight: fontweight_middle,
              fontSize: '1.5vw',
              boxShadow: 0,
              background: selected_gray
              }}>Foodhub</Paper>
        </Box>
      );

}
