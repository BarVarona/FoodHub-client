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
import { Rating } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import OutlinedButton from '../atoms/OutlinedButton';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

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

export default function PostRecipeModal(props) {
    const defaultNumOfIngredients = 4;
    const maxNumOfIngredients = 7;

    const [open, setOpen] = useState(false);
    const [numOfIngredients, setNumOfIngredients] = useState(defaultNumOfIngredients);
    const [postData, setPostData] = useState({
        dishName: '',
        description: '',
        ingredients: ['','','',''],
        instructions: '',
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);    

    return (
        <div style={{
            marginRight: 'auto',
            marginLeft: '3%',
            marginTop: '2%',
            height: '17%'
        }}>
            <NormalButton onClick={handleOpen} text='+ADD NEW RECIPE'/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* title */}
                            <h2>Post new recipe</h2>
                            <div style={{ ...centerFlexDivStyle, width: '100%'}}>
                                {/* name */}
                                <TextInputField size="small" label='Dish name' sx={{ width: '50%'}} onChange={
                                    element => { setPostData({...postData, dishName: element.target.value}) } }/>
                                {/* upload images: TODO*/}
                                <NormalButton text='Upload Images' sx={{ width: '35%', height: '10%', marginLeft: 'auto', marginRight: 'auto'}} />
                            </div>
                            <br></br>
                            {/* description */}
                            <TextInputField multiline rows={4} label='General description' sx={{ width: '50%' }} onChange={
                                    element => { setPostData({...postData, description: element.target.value}) } }/>
                            {/* how many ingredients */}
                            <p style={{ marginBottom: 'None'}}>Number of ingredients:</p>
                            <SliderInput min={1} max={maxNumOfIngredients} valueLabelDisplay="auto" aria-label="slider" value={numOfIngredients ? numOfIngredients : defaultNumOfIngredients} sx={{width: '35%'}} onChange={
                                element => {
                                    const ingredients = [];
                                    for (let i = 0; i < element.target.value; i++) {
                                        if (postData.ingredients[i]) {
                                            ingredients.push(postData.ingredients[i]);
                                        } else {
                                            ingredients.push("");
                                        }
                                    }
                                    setNumOfIngredients(element.target.value);
                                    setPostData({ ...postData, ingredients: [...ingredients] });
                                }
                            }/>
                            <br></br>
                            <div style={{ display: 'flex'}}>
                                {/* ingredients */}
                                <div style={{ display: 'flex', flexDirection: 'column', width: '30%'}}>
                                    {Array.from({length: numOfIngredients}, (_, i) => i + 1).map(num => {
                                        return <TextInputField key={'Ingredient ' + num} size="small" label={'Ingredient ' + num} sx={{ marginBottom: '3%'}} onChange={
                                            element => {
                                                const ingredients = [...postData.ingredients];
                                                ingredients[num - 1] = element.target.value;
                                                setPostData({...postData, ingredients: [...ingredients]})
                                            } }/>
                                    })}
                                </div>
                                {/* instructions */}
                                <TextInputField multiline rows={7} label='Instructions' sx={{ width: '60%', marginLeft: 'auto' }} onChange={
                                    element => { setPostData({...postData, instructions: element.target.value}) } }/>
                            </div>

                            {/* submit */}
                            <OutlinedButton text='Submit !' sx={{ width: '20%', marginTop: '5%', marginLeft: 'auto', marginRight: '3%' }} onClick={
                                // send post request to the api
                                async () => {
                                    try {
                                        // TODO:
                                        alert('!TODO! send to api: ' + JSON.stringify(postData));
                                        // const res = await axios.post(api_url + 'auth/login', loginInfo);
                                        // console.log("Post recipe result:", res);
                                        alert('Recipe posted successfully!');
                                    }
                                    catch (err) {
                                        console.log("Recipe post failed", err);
                                        alert('Please try again!');
                                    }
                                    finally {
                                        window.location.reload();
                                    }
                                }
                            }/>
                    </div>
                </Box>
            </Modal>
        </div>
      );
}
