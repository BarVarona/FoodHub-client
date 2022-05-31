import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ExpandButton from '../atoms/ExpandButton';
import { CardMedia, Rating } from '@mui/material';
import { cards_radius, fontsize_12, fontweight_middle } from '../../styles/_sizes';
import DateCard from '../atoms/DateCard';
import { _orange } from '../../styles/_colors';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Profile from '../atoms/Profile';
import LocationIcon from '../atoms/LocationIcon';
import ProfileIcon from '../molecules/ProfileIcon';

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

const centerFlexDivStyle = {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
};

const centerFlexColDivStyle = {
    ...centerFlexDivStyle,
    flexDirection: 'column',
}

export default function ReviewModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <ExpandButton onClick={handleOpen} sx={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 14 }}/>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                {/* image */}
                <div style={{borderRadius: '30px', width: 200, margin: 'auto'}}>
                    <CardMedia
                        component="img"
                        height={200}
                        image={props.images[0]}
                        sx={{ borderRadius: cards_radius }}
                    />
                </div>
                <div style={{ display: 'flex' }}>
                    {/* date */}
                    <DateCard date={props.date} sx={{ marginRight: '20%'}}/>
                    {/* info */}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{ margin: 1, textAlign: 'left' }}>{props.restaurantName}</h3>
                        <div style={{display: 'flex'}}>
                            <LocationIcon sx={{ marginRight: 0.5 }} />
                            <p style={{ margin: 1, textAlign: 'left', fontSize: fontsize_12 }}>Ramat Hayal, Tel Aviv</p>
                        </div>
                    </div>
                </div>
                {/* Review text */}
                <h5>Total overview:</h5>
                <Typography height={58} variant="body2" color="text.secondary" textAlign={'left'}
                sx={{ overflowY:'scroll' }}>{props.content}</Typography>
                <br></br>
                <div style={{ display: 'flex' }}>
                    {/* Dishes */}
                    <div style={{...centerFlexColDivStyle}}>
                        <RestaurantIcon sx={{
                            width: 25,
                            height: 25,
                            color: _orange,
                            textAlign: 'center'
                        }} />
                        <p>{props.dishes?.join(', ')}</p>
                    </div>
                    {/* price */}
                    <div style={{...centerFlexColDivStyle}}>
                        <CreditCardIcon sx={{
                            width: 25,
                            height: 25,
                            color: _orange,
                            textAlign: 'center'
                        }} />
                        <p>{props.price}₪</p>
                    </div>
                </div>

                {/* ratings */}
                <div style={{...centerFlexDivStyle}}>
                    <p style={{ fontSize: fontsize_12}}>Service:</p>
                    <Rating sx={{ display: 'flex', marginLeft: '4%'}} name="read-only" value={props.rating} readOnly />
                </div>
                <div style={{...centerFlexDivStyle}}>
                    <p style={{ fontSize: fontsize_12}}>Food:</p>
                    <Rating sx={{ display: 'flex', marginLeft: '4%'}} name="read-only" value={props.rating} readOnly />
                </div>
                <div style={{...centerFlexDivStyle}}>
                    <p style={{ fontSize: fontsize_12}}>Total:</p>
                    <Rating sx={{ display: 'flex', marginLeft: '4%'}} name="read-only" value={props.rating} readOnly />
                </div>
                {/* profile */}
                <div style={{ display: 'flex', marginTop: '2%', marginLeft: 'auto'  }}>
                    <ProfileIcon profileName="Rick Sanchez" profileId="2323" sx={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginRight: 1,
                        width: 35,
                        height: 35
                    }}/>
                    <p style={{ fontSize: 14, fontWeight: fontweight_middle }}>{"Rick Sanchez"}</p>
                </div>
            </div>
            </Box>
        </Modal>
    </div>
  );
}