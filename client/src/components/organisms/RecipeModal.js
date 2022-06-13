import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ExpandButton from '../atoms/ExpandButton';
import { CardMedia } from '@mui/material';
import DateCard from '../atoms/DateCard';
import Profile from '../atoms/Profile';
import ProfileIcon from '../molecules/ProfileIcon';
import { fontweight_middle } from '../../styles/_sizes';
import { useState } from 'react';
import { api_url } from '../../consts/general.const';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function RecipeModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <ExpandButton onClick={handleOpen} sx={{ marginTop: 12, marginLeft: -3 }}/>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                {/* image */}
                <div style={{borderRadius: '15px', width: 500, margin: 'auto'}}>
                    <CardMedia
                        component="img"
                        height={230}
                        image={`${api_url}general/image?imageName=${props.images[0]}`}
                        sx={{ borderRadius: 1 }}
                    />
                </div>
                <br></br>
                <div style={{display: 'flex'}}>
                    {/* name */}
                    <h2 style={{ textAlign: 'center', marginLeft: '15%', width: '70%' }}>{props.name}</h2>
                    {/* date */}
                    <DateCard date={props.date} sx={{
                            marginLeft: 'auto',
                            marginRight: '3%',
                    }}/>
                </div>
                <br></br>
                {/* Recipe text */}
                <Typography
                    width='100%' height={200}
                    variant="body2" color="text.secondary" textAlign={'left'}
                    sx={{ overflowY: 'scroll', whiteSpace: 'pre-line' }}
                >
                    {props.generalDesciption+'\nIngredients:\n'}
                    {props.ingredients.map(ingredient=>`- ${ingredient}`).join('\n') + '\n\nInstructions:\n'}
                    {props.instructions}
                </Typography>

                <div style={{ display: 'flex', marginLeft: 'auto', marginTop: '5%' }}>
                    <ProfileIcon user={props.user} withName sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginRight: 1,
                    }}/>
                </div>
            </div>
            </Box>
        </Modal>
    </div>
  );
}