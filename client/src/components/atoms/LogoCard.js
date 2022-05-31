import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { logoCard_width, header_height, fontsize_20, fontweight_middle } from '../../styles/_sizes';
import { _orange } from '../../styles/_colors';


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
          }}
        >
          <Paper elevation={2} sx={{
              textAlign: 'center',
              height: header_height,
              lineHeight: `${header_height}px`,
              color: _orange,
              fontSize: fontsize_20,
              fontWeight: fontweight_middle
              }}>Foodhub</Paper>
        </Box>
      );

}
