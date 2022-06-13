import { Button, Input } from '@mui/material';
import { selected_gray, selected_orange, _orange } from '../../styles/_colors';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';

export default function UploadFileButton(props) {

const [file, setFile] = useState(null);

    return (
        <Button sx={
            file ?
            {
                background: "#777777",
                '&:hover': {
                    backgroundColor: selected_gray,
                },
            }:
            {
            background: _orange,
            '&:hover': {
                backgroundColor: selected_orange,
            },
            ...props.sx,
        }} variant="contained" component="label">
            <CloudUploadIcon sx={{padd: '3%'}}/>
            &nbsp;&nbsp;
            <p style={{
                margin: 0,
                maxWidth: 120,
            }} >{file ? file.name : props.label ? props.label : "Upload Image"}</p>
            <input
                accept="image/*"
                hidden
                type="file"
                name='file'
                onChange={(event) => {
                    props.setFile(event.target.files[0]);
                    setFile(event.target.files[0]);
                }}
            >
            </input>
            
        </Button>
    )
}