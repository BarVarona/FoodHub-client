import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { _orange } from '../../styles/_colors';
import NormalButton from '../atoms/NormalButton';
import TextInputField from '../atoms/TextInputField';
import LocationIcon from '../atoms/LocationIcon';
import { DatePicker } from '@mui/x-date-pickers';
import DatePickerInput from '../molecules/DatePickerInput';
import SliderInput from '../atoms/SliderInput';
import { fontsize_12 } from '../../styles/_sizes';
import { Rating } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import OutlinedButton from '../atoms/OutlinedButton';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { api_url } from "../../consts/general.const";
import APIService from '../../services/api.service';
import UploadFileButton from '../atoms/UploadFileButton';

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

export default function PostReviewModal(props) {
    const defaultNumOfDishes = 3;
    const maxNumOfDishes = 5;

    const [open, setOpen] = React.useState(false);
    const [numOfDishes, setNumOfDishes] = useState(defaultNumOfDishes);
    const [postData, setPostData] = useState({
        restaurantName: '',
        location: '',
        date: '',
        overview: '',
        dishes: ['', '', ''],
        serviceRating: 0,
        foodRating: 0,
        totalRating: 0,
        price: '',
        file: null
    });
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{
            marginRight: 'auto',
            marginLeft: '3%',
            marginTop: '2%',
            marginBottom: '1%',
        }}>
            <NormalButton onClick={handleOpen} text='+ADD NEW REVIEW'/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', width: '50%', flexDirection: 'column'}}>
                            {/* title */}
                            <h2>Post new review</h2>
                            {/* name */}
                            <TextInputField label='Restaurant name' sx={{ width: '100%'}} onChange={
                                    element => { setPostData({...postData, restaurantName: element.target.value}) } }/>
                            <br></br>
                            {/* date */}
                            <DatePickerInput onChange={ newValue => { setPostData({...postData, date: new Date(newValue)}); }}/>
                            <br></br>
                            {/* overview */}
                            <TextInputField multiline rows={4} label='Total Overview' sx={{ width: '100%' }} onChange={
                                    element => { setPostData({...postData, overview: element.target.value}) }}/>
                            {/* how many dishes */}
                            <p style={{ marginBottom: 'None'}}>Number of dishes:</p>
                            <SliderInput min={1} max={maxNumOfDishes} valueLabelDisplay="auto" aria-label="slider" value={numOfDishes ? numOfDishes : defaultNumOfDishes} onChange={
                                element => {
                                    const dishes = [];
                                    for (let i = 0; i < element.target.value; i++) {
                                        if (postData.dishes[i]) {
                                            dishes.push(postData.dishes[i]);
                                        } else {
                                            dishes.push("");
                                        }
                                    }
                                    setNumOfDishes(element.target.value);
                                    setPostData({ ...postData, dishes: [...dishes] });
                                }
                            }/>
                            <br></br>
                            {/* dishes */}
                            {Array.from({length: numOfDishes}, (_, i) => i + 1).map(num => {
                                return <TextInputField size='small' key={'Dish number ' + num} label={'Dish number ' + num} sx={{ width: '100%', marginBottom: '3%'}} onChange={
                                    element => {
                                        const dishes = [...postData.dishes];
                                        dishes[num - 1] = element.target.value;
                                        setPostData({...postData, dishes: [...dishes]})
                                    }
                                }/>
                            })}
                        </div>
                        <div style={{...centerFlexColDivStyle}}>
                            {/* location */}
                            <div style={{ display: 'flex', marginTop: '29%' }}>
                                <LocationIcon sx={{width: '15%', height: 30, marginLeft: '5%'}}/>
                                <TextInputField label='Location' sx={{ width: '85%'}} onChange={
                                    element => { setPostData({...postData, location: element.target.value}) }}/>
                            </div>
                            <br></br>
                            <UploadFileButton setFile={(file) => {
                                setPostData({ ...postData, file })
                            }}/>
                            <br></br>
                            <br></br>
                            <br></br>
                            {/* rating */}
                            <div style={{...centerFlexDivStyle}}>
                                    <p style={{ fontSize: fontsize_12}}>Service:</p>
                                    <Rating sx={{ display: 'flex', marginLeft: '4%'}} name="rate"
                                        onChange={ element => { setPostData({...postData, serviceRating: +element.target.value}) }}/>
                                </div>
                                <div style={{...centerFlexDivStyle}}>
                                    <p style={{ fontSize: fontsize_12}}>Food:</p>
                                    <Rating sx={{ display: 'flex', marginLeft: '4%'}} name="rate"
                                        onChange={ element => { setPostData({...postData, foodRating: +element.target.value}) }}/>
                                </div>
                                <div style={{...centerFlexDivStyle}}>
                                    <p style={{ fontSize: fontsize_12}}>Total:</p>
                                    <Rating sx={{ display: 'flex', marginLeft: '4%'}} name="rate"
                                        onChange={ element => { setPostData({...postData, totalRating: +element.target.value}) }}/>
                                </div>
                            {/* price */}
                            <div style={{...centerFlexDivStyle, marginTop: '20%', width: '100%' }}>
                                <CreditCardIcon sx={{
                                    width: '15%',
                                    height: 30,
                                    marginLeft: '15%',
                                    color: _orange,
                                }} />
                                <TextInputField label='Total price' sx={{ width: '45%'}} type="number" onChange={
                                    element => { setPostData({...postData, price: +element.target.value}) }}/>
                            </div>
                            {/* submit */}
                            <OutlinedButton text='Submit !' sx={{ width: '50%', marginTop: '25%', marginLeft: 'auto' }} onClick={
                                // send post request to the api
                                async () => {                                    
                                    const res = await APIService.post('reviews', {
                                        restaurantName: postData.restaurantName,
                                        totalOverview: postData.overview,
                                        dateOfVisit: postData.date,
                                        numOfDishes: postData.dishes.length,
                                        dishesNames: postData.dishes,
                                        totalPrice: postData.price,
                                        location: postData.location,
                                        serviceRating: postData.serviceRating,
                                        foodRating: postData.foodRating,
                                        totalRating: postData.totalRating
                                    });
                                    if (res === null) {
                                        return;
                                    }

                                    // upload image:
                                    await APIService.uploadImage(`reviews/${res._id}/image`, postData.file);

                                    console.log("Post review result:", res);
                                    alert('Review posted successfully!');
                                    setOpen(false);
                                    props.fetchData();
                                }
                            }/>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
      );
}
